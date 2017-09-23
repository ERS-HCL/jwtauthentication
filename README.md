# jwtauthentication
This application is created to understand, how we can secure our API using token based authentication.

## Features
* Node JS, Express, Typescript base
* cors, body-parser, method-override as url protection
* express-jwt for token creation and router ristriction
* Q for promiss based response
* jest, ts-jest, supertest for unit test  
* APIs 
    - users - list of users (/users)
    - authentication  - Authentication of user based on login credential (username 7 password)
    - products - list of all product (authentication will not apply and this can be assess as open link)
    - API Partial JSON response support 
```
    curl http://localhost:3000/users
```
- Response 
```
{
    "code":500,
    "message":"UnauthorizedError: No authorization token was found."
}
```
```
    curl http://localhost:3000/users/authenticate
```
- Response 
```
{
    "code":500,
    "message":"UnauthorizedError: No authorization token was found."
}
```
```
    post http://localhost:3000/users/authenticate with json fromat post data {"username":"user2","password":"pass2"}
```
- Response
```
{
    "email": "abcd2@gmail.com",
    "name": "User 2 Surname 2",
    "phoneNumbers": [
        "1111111112",
        "2222222224"
    ],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMiIsImlhdCI6MTUwNTM4NTU3NX0.UmjKAh4rj2rzG_TKpN4DwjconnJkd2hY0LXO7-qkkqI"
}
```
---
```
    get http://localhost:3000/users 
    After successful authentication you will get token with response data and set token value 
    (Autherization: Mybearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMiIsImlhdCI6MTUwNTM4NTU3NX0.UmjKAh4rj2rzG_TKpN4DwjconnJkd2hY0LXO7-qkkqI)
    with request header of each request. then you will able to get success result of user list.
```
- Response
```
[
    {
        "id": 1,
        "username": "user1",
        "password": "pass1",
        "email": "abcd1@gmail.com",
        "name": {
            "first": "User 1",
            "last": "Surname 1"
        },
        "status": "true",
        "phoneNumbers": [
            "1111111111",
            "2222222222"
        ]
    },
    {
        "id": 2,
        "username": "user2",
        "password": "pass2",
        "email": "abcd2@gmail.com",
        "name": {
            "first": "User 2",
            "last": "Surname 2"
        },
        "status": "true",
        "phoneNumbers": [
            "1111111112",
            "2222222224"
        ]
    }
]
```
---
```
    post http://localhost:3000/products
    Notes- No need to add token information as authentication, this will open as open link
```
- Response
```
[
    {
        "name": "product1",
        "price": 100,
        "qty": 50,
        "des": "My product 1",
        "img": "prod1.png",
        "status": 1
    },
    {
        "name": "product2",
        "price": 200,
        "qty": 51,
        "des": "My product 2",
        "img": "prod2.png",
        "status": 1
    },
    {
        "name": "product3",
        "price": 300,
        "qty": 52,
        "des": "My product 3",
        "img": "prod3.png",
        "status": 1
    },
    {
        "name": "product4",
        "price": 400,
        "qty": 53,
        "des": "My product 4",
        "img": "prod4.png",
        "status": 1
    },
    {
        "name": "product5",
        "price": 500,
        "qty": 55,
        "des": "My product 5",
        "img": "prod5.png",
        "status": 1
    }
]
```

## Pre-requisites

Install npm and nodeJS

npm version >= 3.xa
node version >= 6.x

```
## Using command prompt change directory with source code git clone or downloaded root path
cd "your application source path."
```
## Install It

```
npm install
```
## Compile and build Run It
```
tsc
```
## Run application
```
node build/app/server.js
```
## Run test
```
npm test
```
##  Unit test coverage result
- Use CMD 
    * By running command 'npm test' from CMD result of unit test will looks like as below.
    ![Alt text](/images/unittest1.png?raw=true "Test Result")

## How to test API with Live application
- Use Chrome extention Postman to test API  
    * Add Api endpoint http://localhost:3001/users/authenticate
    * Click on body tab
     inside textarea add input data with given json format {"username":"user2","password":"pass2"}
    * Befor to click on send button select format as JSON(aaplication/json) from the dropdown
    * Click on Send button 
    * You will get response data see screenshot
    ![Alt text](/images/testservice1.jpg?raw=true "First Service")

    * Open another tab 
    * Add Api endpoint http://localhost:3001/users
    * Click on Headers tab
    * Copy token value from first service response and use in second service header  
    * Add Key Value as (Autherization: Mybearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMiIsImlhdCI6MTUwNTM4NTU3NX0.UmjKAh4rj2rzG_TKpN4DwjconnJkd2hY0LXO7-qkkqI)
    * Click on Send button 
    * You will get response data see screenshot
    ![Alt text](/images/testservice2.jpg?raw=true "Second Service")

### License
MIT