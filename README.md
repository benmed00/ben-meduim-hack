
# Simple-Medium

A Medium clone where users can search, read, create and comment articles of their own and others.

## Overview

technologie principal utiliser
Angular 11(with ssr approche "Angular Universal")
express.js
Nodejs 12

the developpement of this application was emphasized on the frontEnd section over the backend.

### Get a demo

Authentication + Articles-CRUD microservice (/backend folder)
`npm run dev`

Client-Side application (/frontEnd folder)
`ng serve`

## Arcitecture

Backend application (/backend folder) is managing :

1. Authentication : responsible for login, signup & checking the validity of connection tokens
2. Articles : reponsible for managing articles, comments and tags

Frontend application (/client folder): represents the application that'll run on the user's browser in partiall(because we use ssr) so you can visualize the UI-components

### Frontend application Structure

- containe 3 module + the main one

1. authentication : that manage the login & signIn pages and services.
2. article : that mange allthe aspect related directly with logique of the article in the app
3. shared : a shared module who simplify the import and contain conponent and and services, that can be reused (simplify scalability)

- contain 3 main pages

1. home : where there is the lamding page in witch you can consulte the articles
2. Signup: to create an account
3. login: signe-intothe application to performe dynamique action in the app like (crud article) 

### Backend application Structure

1. authentification: handles login, signup and token validation(error, success), implement a cookie based token
2. article crud: menages the cred of the articles, the tags and the comments of a given article

### role management

Is assured by the frontend and the backend so the logic is devised between the two applications

## Build And deployement

> this app is ready to be dockerized

// check docker in the machine
`docker info`
`docker --version`

// create an image
`docker build -t simple-medium .`
// check the images
`docker images`
// running on Image
`docker run -it -p  3080:3080 --name ben-medium-hack angular-node-image`
// check the container
`docker ps`

## Upcoming feature

this project was annalysed and developped in under 18 h stretched

- Separate the backend into two microservises a smart-auth and a crud on
- add elastic search to search input
- github pipeline

For any proposition or remarque feel free to make a pull request PR/MR or create an issue

- you can also send me at `benyakoub.pro@gmail.com`
