# Library-Management-System

    This is a library management API backend fot the management of users and the books

# Routes and the Endpoints

<!-- USER -->

## /users 
GET : Get all the list of users in the system
POST : Create or register a new user

## /users/{id}
GET : Get user by their IDs
PUT : Updating a user by their IDs 
DELETE : Deleting a users by their IDs (Check if the user has an issued book) && (Is there any fine or penalty collected)

## /users/subcription-details(id)
GET : Get a user subscription details by their ID
    >> Data of Subscription 
    >> Valid Till
    >> Fine if any !

<!-- BOOKS -->

## /books 
GET : Get all the books in the system 
POST : In order to add a new book or create a new book in the system 

## /books/{id}
GET : Get a book by its ID
PUT : Update a book by its ID
DELETE : Delete a book by its ID

## /books/issued
GET : Get all the issued books

## /books/issued/withFine
GET : Get all issued books with their fine amount

<!-- SUBSCRIPTIONS -->

## Subcription Types
    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)

>> If a user misses the renewal date then user should be collected with 100 rs

>> If the user misses his subscription , then user is expected to pay 100rs again 

>> If a user misse both subscription and renewal then the is expected to pay 200rs

## Commands :
npm init
npm i express
npm i nodemon --save-dev

npm run dev

<!-- to restore node modules and package-lock.json --> npm i/npm install