API Documentation


Authentication

[POST] to  api/auth/register : creates user. Pass in the following credentials of your choice as the body of the request: { username: 'yourusername', password: 'yourpassword'}

[POST]  to api/auth/login : returns a token to be added to the header of all other requests. Pass in the following credentials as the body of the request: { username: 'yourusername', password: 'yourpassword' }

[GET]  to api/auth/logout : invalidates the user. Pass in the following credentials as the body of the request: { username: 'yourusername', password: 'yourpassword' }

Songs

[GET] to  api/songs : views list of songs. Be sure to pass the Authentication token received on login
