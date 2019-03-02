# Environmental Authentication

This plugin allows you to configure your request authentication in your environment.

## Usage


### Basic usage
The plugin is configured to search for either the 'auth' or the 'auth_settings' key in your environment. In this object you can define your value just like you would in the 'auth' tab. 

Here's an example:

```
  "auth_settings": {
    "accessTokenUrl": "http://some-website.test/oauth/token",
    "grantType": "password",
    "type": "oauth2"
    "clientId": 9,
    "clientSecret": "secret",
    "password": "secret",
    "username": "user@example.net"
  }
```

#### Layered environments
You may also combine the `auth_settings` and `auth` keys, this can be usefull if you define different environments in your folders, here's an example:

*Note:* Environment keys get overwritten by Insomnia, not merged.

Main environment:


```
    // define that every request should use oauth2
	"auth_settings": {
		"accessTokenUrl": "http://some-website.test/oauth/token",
		"grantType": "password",
		"type": "oauth2"
	}
```

Users folder environment:
```
    // Define your user for this folder
    "auth": {
        "clientId": 9,
        "clientSecret": "secret",
        "password": "secret",
        "username": "user@example.net"
    }
```




