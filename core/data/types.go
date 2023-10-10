package data

// GetStringSlice will return the string slice value for a key.
func (ds *Datastore) GetStringSlice(key string) ([]string, error) {
	configEntry, err := ds.Get(key)
	if err != nil {
		return []string{}, err
	}
	return configEntry.getStringSlice()
}

// SetStringSlice will set the string slice value for a key.
func (ds *Datastore) SetStringSlice(key string, value []string) error {
	configEntry := ConfigEntry{value, key}
	return ds.Save(configEntry)
}

// GetString will return the string value for a key.
func (ds *Datastore) GetString(key string) (string, error) {
	configEntry, err := ds.Get(key)
	if err != nil {
		return "", err
	}
	return configEntry.getString()
}

// SetString will set the string value for a key.
func (ds *Datastore) SetString(key string, value string) error {
	configEntry := ConfigEntry{value, key}
	return ds.Save(configEntry)
}

// GetNumber will return the numeric value for a key.
func (ds *Datastore) GetNumber(key string) (float64, error) {
	configEntry, err := ds.Get(key)
	if err != nil {
		return 0, err
	}
	return configEntry.getNumber()
}

// SetNumber will set the numeric value for a key.
func (ds *Datastore) SetNumber(key string, value float64) error {
	configEntry := ConfigEntry{value, key}
	return ds.Save(configEntry)
}

// GetBool will return the boolean value for a key.
func (ds *Datastore) GetBool(key string) (bool, error) {
	configEntry, err := ds.Get(key)
	if err != nil {
		return false, err
	}
	return configEntry.getBool()
}

// SetBool will set the boolean value for a key.
func (ds *Datastore) SetBool(key string, value bool) error {
	configEntry := ConfigEntry{value, key}
	return ds.Save(configEntry)
}

// GetStringMap will return the string map value for a key.
func (ds *Datastore) GetStringMap(key string) (map[string]string, error) {
	configEntry, err := ds.Get(key)
	if err != nil {
		return map[string]string{}, err
	}
	return configEntry.getStringMap()
}

// SetStringMap will set the string map value for a key.
func (ds *Datastore) SetStringMap(key string, value map[string]string) error {
	configEntry := ConfigEntry{value, key}
	return ds.Save(configEntry)
}
