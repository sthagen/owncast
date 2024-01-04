package utils

import (
	"crypto/md5" //nolint
	"encoding/hex"
	"net"
	"net/http"
	"strings"

	log "github.com/sirupsen/logrus"
)

// GenerateClientIDFromRequest generates a client id from the provided request.
func GenerateClientIDFromRequest(req *http.Request) string {
	ipAddress := GetIPAddressFromRequest(req)
	clientID := ipAddress + req.UserAgent()

	// Create a MD5 hash of this ip + useragent
	b := md5.Sum([]byte(clientID)) // nolint
	return hex.EncodeToString(b[:])
}

// GetIPAddressFromRequest returns the IP address from a http request.
func GetIPAddressFromRequest(req *http.Request) string {
	ipAddressString := req.RemoteAddr

	xForwardedFor := req.Header.Get("X-FORWARDED-FOR")
	if xForwardedFor != "" {
		ipAddressString = strings.Split(xForwardedFor, ", ")[0]
	}

	if !strings.Contains(ipAddressString, ":") {
		return ipAddressString
	}

	if isIPv6(ipAddressString) && !strings.Contains(ipAddressString, "[") {
		return ipAddressString
	}

	ip, _, err := net.SplitHostPort(ipAddressString)
	if err != nil {
		log.Errorln(err)
		return ""
	}

	return ip
}

func isIPv6(address string) bool {
	return strings.Count(address, ":") >= 2
}
