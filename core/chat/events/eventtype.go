package events

// EventType is the type of a websocket event.
type EventType = string

const (
	// MessageSent is the event sent when a chat event takes place.
	MessageSent EventType = "CHAT"
	// UserJoined is the event sent when a chat user join action takes place.
	UserJoined EventType = "USER_JOINED"
	// UserParted is the event sent when a chat user part action takes place.
	UserParted EventType = "USER_PARTED"
	// UserNameChanged is the event sent when a chat username change takes place.
	UserNameChanged EventType = "NAME_CHANGE"
	// UserColorChanged is the event sent when a chat user color change takes place.
	UserColorChanged EventType = "COLOR_CHANGE"
	// VisibiltyUpdate is the event sent when a chat message's visibility changes.
	VisibiltyUpdate EventType = "VISIBILITY-UPDATE"
	// PING is a ping message.
	PING EventType = "PING"
	// PONG is a pong message.
	PONG EventType = "PONG"
	// StreamStarted represents a stream started event.
	StreamStarted EventType = "STREAM_STARTED"
	// StreamStopped represents a stream stopped event.
	StreamStopped EventType = "STREAM_STOPPED"
	// StreamTitleUpdated is the event sent when a stream's title changes.
	StreamTitleUpdated EventType = "STREAM_TITLE_UPDATED"
	// SystemMessageSent is the event sent when a system message is sent.
	SystemMessageSent EventType = "SYSTEM"
	// ChatDisabled is when a user is explicitly disabled and blocked from using chat.
	ChatDisabled EventType = "CHAT_DISABLED"
	// ConnectedUserInfo is a private event to a user letting them know their user details.
	ConnectedUserInfo EventType = "CONNECTED_USER_INFO"
	// ChatActionSent is a generic chat action that can be used for anything that doesn't need specific handling or formatting.
	ChatActionSent EventType = "CHAT_ACTION"
	// ErrorNeedsRegistration is an error returned when the client needs to perform registration.
	ErrorNeedsRegistration EventType = "ERROR_NEEDS_REGISTRATION" // nolint:gosec
	// ErrorMaxConnectionsExceeded is an error returned when the server determined it should not handle more connections.
	ErrorMaxConnectionsExceeded EventType = "ERROR_MAX_CONNECTIONS_EXCEEDED"
	// ErrorUserDisabled is an error returned when the connecting user has been previously banned/disabled.
	ErrorUserDisabled EventType = "ERROR_USER_DISABLED"
	// FediverseEngagementFollow is an event representing a follow action that took place on the fediverse.
	FediverseEngagementFollow EventType = "FEDIVERSE_ENGAGEMENT_FOLLOW"
	// FediverseEngagementLike is an event representing a like action that took place on the fediverse.
	FediverseEngagementLike EventType = "FEDIVERSE_ENGAGEMENT_LIKE"
	// FediverseEngagementRepost is an event representing a re-post action that took place on the fediverse.
	FediverseEngagementRepost EventType = "FEDIVERSE_ENGAGEMENT_REPOST"
)
