package models

// S3 is the storage configuration.
type S3 struct {
	Endpoint  string `json:"endpoint,omitempty"`
	AccessKey string `json:"accessKey,omitempty"`
	Secret    string `json:"secret,omitempty"`
	Bucket    string `json:"bucket,omitempty"`
	Region    string `json:"region,omitempty"`
	ACL       string `json:"acl,omitempty"`

	// PathPrefix is an optional prefix for object storage.
	PathPrefix string `json:"pathPrefix,omitempty"`

	// This property is no longer used as of v0.1.1. See the standalone
	// property that was pulled out of here instead. It's only left here
	// to allow the migration to take place without data loss.
	ServingEndpoint string `json:"-"`
	Enabled         bool   `json:"enabled"`
	ForcePathStyle  bool   `json:"forcePathStyle"`
}
