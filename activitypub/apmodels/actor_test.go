package apmodels

import (
	"io/ioutil"
	"net/url"
	"os"
	"testing"

	"github.com/go-fed/activity/streams"
	"github.com/go-fed/activity/streams/vocab"
	"github.com/owncast/owncast/core/data"
)

func makeFakePerson() vocab.ActivityStreamsPerson {
	iri, _ := url.Parse("https://fake.fediverse.server/user/mrfoo")
	name := "Mr Foo"
	username := "foodawg"
	inbox, _ := url.Parse("https://fake.fediverse.server/user/mrfoo/inbox")
	userAvatarURL, _ := url.Parse("https://fake.fediverse.server/user/mrfoo/avatar.png")

	person := streams.NewActivityStreamsPerson()

	id := streams.NewJSONLDIdProperty()
	id.Set(iri)
	person.SetJSONLDId(id)

	nameProperty := streams.NewActivityStreamsNameProperty()
	nameProperty.AppendXMLSchemaString(name)
	person.SetActivityStreamsName(nameProperty)

	preferredUsernameProperty := streams.NewActivityStreamsPreferredUsernameProperty()
	preferredUsernameProperty.SetXMLSchemaString(username)
	person.SetActivityStreamsPreferredUsername(preferredUsernameProperty)

	inboxProp := streams.NewActivityStreamsInboxProperty()
	inboxProp.SetIRI(inbox)
	person.SetActivityStreamsInbox(inboxProp)

	image := streams.NewActivityStreamsImage()
	imgProp := streams.NewActivityStreamsUrlProperty()
	imgProp.AppendIRI(userAvatarURL)
	image.SetActivityStreamsUrl(imgProp)
	icon := streams.NewActivityStreamsIconProperty()
	icon.AppendActivityStreamsImage(image)
	person.SetActivityStreamsIcon(icon)

	return person
}

func TestMain(m *testing.M) {
	dbFile, err := ioutil.TempFile(os.TempDir(), "owncast-test-db.db")
	if err != nil {
		panic(err)
	}

	data.SetupPersistence(dbFile.Name())
	data.SetServerURL("https://my.cool.site.biz")

	m.Run()
}

func TestMakeActorFromPerson(t *testing.T) {
	person := makeFakePerson()
	actor := MakeActorFromPerson(person)

	if actor.ActorIri != person.GetJSONLDId().GetIRI() {
		t.Errorf("actor.ID = %v, want %v", actor.ActorIri, person.GetJSONLDId().GetIRI())
	}

	if actor.Name != person.GetActivityStreamsName().At(0).GetXMLSchemaString() {
		t.Errorf("actor.Name = %v, want %v", actor.Name, person.GetActivityStreamsName().At(0).GetXMLSchemaString())
	}

	if actor.Username != person.GetActivityStreamsPreferredUsername().GetXMLSchemaString() {
		t.Errorf("actor.Username = %v, want %v", actor.Username, person.GetActivityStreamsPreferredUsername().GetXMLSchemaString())
	}

	if actor.Inbox != person.GetActivityStreamsInbox().GetIRI() {
		t.Errorf("actor.Inbox = %v, want %v", actor.Inbox.String(), person.GetActivityStreamsInbox().GetIRI())
	}

	if actor.Image != person.GetActivityStreamsIcon().At(0).GetActivityStreamsImage().GetActivityStreamsUrl().At(0).GetIRI() {
		t.Errorf("actor.Image = %v, want %v", actor.Image, person.GetActivityStreamsIcon().At(0).GetActivityStreamsImage().GetActivityStreamsUrl().At(0).GetIRI())
	}
}

func TestMakeActorPropertyWithID(t *testing.T) {
	iri, _ := url.Parse("https://fake.fediverse.server/user/mrfoo")
	actor := MakeActorPropertyWithID(iri)

	if actor.Begin().GetIRI() != iri {
		t.Errorf("actor.IRI = %v, want %v", actor.Begin().GetIRI(), iri)
	}
}

func TestGetFullUsernameFromPerson(t *testing.T) {
	expected := "foodawg@fake.fediverse.server"
	person := makeFakePerson()
	username := GetFullUsernameFromPerson(person)

	if username != expected {
		t.Errorf("actor.Username = %v, want %v", username, expected)
	}
}

func TestAddMetadataLinkToProfile(t *testing.T) {
	person := makeFakePerson()
	addMetadataLinkToProfile(person, "my site", "https://my.cool.site.biz")
	attchment := person.GetActivityStreamsAttachment().At(0)

	nameValue := attchment.GetActivityStreamsObject().GetActivityStreamsName().At(0).GetXMLSchemaString()
	expected := "my site"
	if nameValue != expected {
		t.Errorf("attachment name = %v, want %v", nameValue, expected)
	}

	propertyValue := attchment.GetActivityStreamsObject().GetUnknownProperties()["value"]
	expected = `<a href="https://my.cool.site.biz" rel="me nofollow noopener noreferrer" target="_blank">https://my.cool.site.biz</a>`
	if propertyValue != expected {
		t.Errorf("attachment value = %v, want %v", propertyValue, expected)
	}
}

func TestMakePersonForAccount(t *testing.T) {
	person := MakePersonForAccount("accountname")
	expectedIRI := "https://my.cool.site.biz/federation/user/accountname"
	if person.GetJSONLDId().Get().String() != expectedIRI {
		t.Errorf("actor.IRI = %v, want %v", person.GetJSONLDId().Get().String(), expectedIRI)
	}

	if person.GetActivityStreamsPreferredUsername().GetXMLSchemaString() != "accountname" {
		t.Errorf("actor.PreferredUsername = %v, want %v", person.GetActivityStreamsPreferredUsername().GetXMLSchemaString(), expectedIRI)
	}

	expectedInbox := "https://my.cool.site.biz/federation/user/accountname/inbox"
	if person.GetActivityStreamsInbox().GetIRI().String() != expectedInbox {
		t.Errorf("actor.Inbox = %v, want %v", person.GetActivityStreamsInbox().GetIRI().String(), expectedInbox)
	}

	expectedOutbox := "https://my.cool.site.biz/federation/user/accountname/outbox"
	if person.GetActivityStreamsOutbox().GetIRI().String() != expectedOutbox {
		t.Errorf("actor.Outbox = %v, want %v", person.GetActivityStreamsOutbox().GetIRI().String(), expectedOutbox)
	}

	expectedFollowers := "https://my.cool.site.biz/federation/user/accountname/followers"
	if person.GetActivityStreamsFollowers().GetIRI().String() != expectedFollowers {
		t.Errorf("actor.Followers = %v, want %v", person.GetActivityStreamsFollowers().GetIRI().String(), expectedFollowers)
	}

	expectedName := "Owncast"
	if person.GetActivityStreamsName().Begin().GetXMLSchemaString() != expectedName {
		t.Errorf("actor.Name = %v, want %v", person.GetActivityStreamsName().Begin().GetXMLSchemaString(), expectedName)
	}

	expectedAvatar := "https://my.cool.site.biz/logo/external"
	if person.GetActivityStreamsIcon().At(0).GetActivityStreamsImage().GetActivityStreamsUrl().Begin().GetIRI().String() != expectedAvatar {
		t.Errorf("actor.Avatar = %v, want %v", person.GetActivityStreamsIcon().At(0).GetActivityStreamsImage().GetActivityStreamsUrl().Begin().GetIRI().String(), expectedAvatar)
	}

	expectedSummary := "Welcome to your new Owncast server! This description can be changed in the admin. Visit https://owncast.online/docs/configuration/ to learn more."
	if person.GetActivityStreamsSummary().At(0).GetXMLSchemaString() != expectedSummary {
		t.Errorf("actor.Summary = %v, want %v", person.GetActivityStreamsSummary().At(0).GetXMLSchemaString(), expectedSummary)
	}

	if person.GetActivityStreamsUrl().At(0).GetIRI().String() != expectedIRI {
		t.Errorf("actor.URL = %v, want %v", person.GetActivityStreamsUrl().At(0).GetIRI().String(), expectedIRI)
	}
}
