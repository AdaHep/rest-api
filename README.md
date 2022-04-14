# rest-api

In this small project i have created a simple rest-api for cars.

## To run:

1. npm install
2. npm start

## Things to do

#### GET

Simple GET request. Will return all objects in cars.json file.

#### POST

Add new objects into the cars.json array.
Information about the new object is entered in the test.rest file.
ID for the new object will be auto-generated.

#### PUT

In the test.rest file you can also send a PUT-request to update an already existing object in the cars.json file. Simply enter the new information on lines 26-29 in the test.rest file before sending the request.

#### DELETE

To delete an object, go to the test.rest file. Scroll down to DELETE. Then replace the ID in the address with the ID of the item you want to delete. Send the reqeust and voila, the item is gone with the wind.
