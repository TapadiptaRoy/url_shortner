URL Shortener

A simple and scalable URL shortener built with Node.js, Express, and MongoDB.
This application allows users to convert long URLs into short, shareable links and redirects users to the original URL when the short link is visited.

How the Project Works
1. User Submits a Long URL

The user enters a long URL in the input field on the frontend interface.

Example:

https://example.com/very/long/link/that/is/hard/to/share

This request is sent to the backend API.

2. Backend Receives the Request

The Express server receives the request through an API endpoint.

The backend performs the following tasks:

Validates the URL

Generates a unique short ID

Stores the mapping in the database

3. Short ID Generation

A unique shortId is generated for each URL using an ID generator (e.g., nanoid/shortid).

Example:

Original URL → https://example.com/very/long/link
Short ID → aB3xY9

The short URL becomes:

https://your-backend-domain/aB3xY9

4. Storing Data in MongoDB

The backend stores the URL mapping in MongoDB using Mongoose.

Each document contains:

shortId → unique identifier

redirectURL → original long URL

visitHistory → array storing visit timestamps

Example document:

{
"shortId": "aB3xY9",
"redirectURL": "https://example.com/very/long/link",
"visitHistory": []
}

5. Redirecting Users

When someone opens the short link:

https://your-backend-domain/aB3xY9

The backend:

Searches MongoDB for the matching shortId

Records the visit timestamp

Redirects the user to the original URL

This process happens instantly.

6. Deployment

The application is deployed using Render for the backend server and MongoDB Atlas for the database.

Environment variables are used to securely store sensitive configuration such as:

MongoDB connection string

Server port

Node environment

Tech Stack

Backend

Node.js

Express.js

MongoDB

Mongoose


work Flow

User Input → API Request → Short ID Generation → Database Storage → Short URL Created → User Redirected

