# Blogapp-api
A simple RESTFUL BLOG API that accurately simulates basic CRUD operations

#HOW TO SET UP THE APP
1. CLONE THE REPOSITORY VIA HTTPS OR SSH

2. Once you have the files in your desired folder, run "npm install" to install all the dependencies specified in package.json

3. This app uses a mongoDB Cloud database where we store our data. To set up your own mongoDB Atlas Cloud database, please follow the instructions specified here https://docs.atlas.mongodb.com/getting-started/

4. After setting up your database, change the MONGO_DB variable in ".env" file to your database connection URL, don't forget to specify your DB username, password and collection name

5. Run "npm start" to start the App

This is a Simple Blog App API with Posts and Comments. The models folder contains DB Models for both Post and Comments and the Routes folder contains routes for the API perform CRUD operations on the database. We can use a REST Client like Postman to perform CRUD operations.

# Posts Model
fields to specify: "username", "title" and "content"

# Comments Model
fields to specify: "username" and "text"

# CRUD Operations & Endpoints
GET ALL POSTS: https://localhost:PORT/api/post/0/0

GET SINGLE POST: https://localhost:PORT/api/post/:POST_ID

GET ALL POST WITH PAGINATION: https://localhost:PORT/api/post/:PAGE_LIMIT/:PAGE_NUMBER

CREATE POST: https://localhost:PORT/api/post/createpost

UPDATE POST: https://localhost:PORT/api/post/update/:POST_ID

DELETE POST: https://localhost:PORT/api/post/delete/:POST_ID

GET ALL COMMENTS IN A POST: https://localhost:PORT/api/post/c/a/:POST_ID

GET SINGLE COMMENT: https://localhost:PORT/api/post/c/:COMMENT_ID

CREATE COMMENT: https://localhost:PORT/api/post/c/:POST_ID/comment

UPDATE COMMENT: https://localhost:PORT/api/post/c/update/:COMMENT_ID

DELETE COMMENT: https://localhost:PORT/api/post/c/delete/:COMMENT_ID


# TOOLS USED
1. NodeJS
2. JavaScript
3. Postman
4. MongoDB Atlas Cloud Server

