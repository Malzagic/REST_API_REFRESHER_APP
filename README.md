# Refresher REST_API server

Refresher app is a project created for learining purpoeses. This is the backend page of the app. Using this app you can add users, authenticate and authorize them. Add places that people can visit. For now, Google Maps doesn't work because I don't want to add any of my credit card credentials to Google, but you can easily apply it yourself! There is a commented script you can use to add Google maps.

## Installation

Download the repositories and use the package manager [npm](https://docs.npmjs.com/) to install all dependencies.

```bash
npm install
```

## Usage
There are a few things you need to change. Create environment variables to configure the connection between the databases (Mongodb in this case). Here you have the frontend site: [frontend refresher](https://github.com/Malzagic/refresher_app). To use the server on development enviroment you have to use [nodemon](https://www.npmjs.com/package/nodemon)

```bash
nodemon app.js
```

## BACKEND TECH STACK:
- NODEJS
- EXPRESSJS
- AXIOS
- BCRYPTJS
- BODY PARSER
- DOTENV
- EXPRESS VALIDATOR
- JSON WEB TOKEN
- MONGOOSE
- MONGOOSE UNIQUE VALIDATOR
- MULTER
- UUID
- JavaScript

## Others
App usage season to keep users logged in for 1 hour. Here are some forms of validation, on the frontend and on the backend.

### Live Version
[refresher](https://refresher-lde0.onrender.com/)