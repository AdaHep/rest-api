# rest-api

In this small project i have created a simple rest-api for cars.

## To run:

1. npm install
2. npm start

## Things to do

#### GET

Simple get request. Will return all objects in cars.json file.

#### POST

Add new objects into the cars.json array.
Information about the new object is entered in the test.rest file.
ID for the new object will be auto-generated.

#### PUT

To change the information about an object. First go to index.js line >49< and type in the new information. Then you can send the PUT-request from test.rest file.

#### Delete

To delete an object, go to the test.rest file. Scroll down to DELETE. Then replace the X's in the address with the ID of the item you want to delete.
