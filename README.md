
# AlterWhite

AlterWhite is an Alternative Product Information System web application designed to enhance user experience by providing a comprehensive platform for managing and exploring product-related queries. With a focus on responsiveness and user-friendliness, security, and efficiency, AlterWhite allows users to create account, browse and search for product queries, and manage recommendations.
 


## Demo

- [Live Link](https://alterwhite-507f4.web.app/)
- [Server Side Repo] (https://github.com/nhnaahid/alterwhite-server)
- user email: nahid@gmail.com
- user pass: Nahid@123

# Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Make sure you have the following installed:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Firebase CLI](https://firebase.google.com/docs/cli)

## Installation

1. **Clone & Install client dependencies:**

    ```bash
    git clone https://github.com/nhnaahid/alterwhite-client.git
    cd your-client-repository
    npm install
    ```

2. **Clone & Install server dependencies:**

    ```bash
    git clone https://github.com/nhnaahid/alterwhite-server.git
    cd your-server-repository
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env.local` file in the `client` directory and add the following:

    ```env
    VITE_apiKey=your_firebase_api_key
    VITE_authDomain=your_firebase_auth_domain
    VITE_projectId=your_firebase_project_id
    VITE_storageBucket=your_firebase_storage_bucket
    VITE_messagingSenderId=your_firebase_messaging_sender_id
    VITE_appId=your_firebase_app_id
    ```

    Create a `.env` file in the `server` directory and add the following:

    ```env
    DB_USER=mongodb_uri_user
    DB_PASS=mongodb_uri_pass
    ACCESS_TOKEN_SECRET=generated_jwt_token
    ```

5. **Run the server:**

    ```bash
    cd your-server-repository
    nodemon index.js
    ```

6. **Run the client:**

    Open a new terminal window/tab and run:

    ```bash
    cd your-client-repository
    npm run dev
    ```

## Firebase & JWT Setup
Please follow their docs to integrate firebase authentication, create and store jwt in local storage for authorization.

## Usage

Once the server and client are running, open your web browser and go to `http://localhost:5173` to view the application.


## Features

- **User Profile Management:** Users can create Account.
- **Firebase Authentication:** Secure and reliable authentication using Firebase.
- **Query Management:** Users can browse, add, update, and delete product queries.
- **Search Functionality:** Efficient search mechanism to find queries by product name.
- **Recommendations:** Users can view, add, update and delete recommendations.
- **Responsive Design:** Optimized for various devices to ensure a seamless experience.
- **Personalized Recommendations:** Users can view recommended products based on their added queries and recommendations.
- **JSON Web Token (JWT) Security:** Ensures secure data transmission, authentication and authorization.
- **Aesthetic Design:** Modern and appealing design to enhance user interaction.


## Tech Stack

AlterWhite is built using the MERN stack, a powerful combination of technologies that provide a seamless development experience for both the frontend and backend.

- **Frontend:** React.js, Tailwind.css
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication
- **Security:** JSON Web Tokens (JWT)
- **Hosting:** Firebase, vercel
- **Version Control:** Git, GitHub

By utilizing the MERN stack and these additional tools, AlterWhite ensures a robust, scalable, and high-performance web application that delivers a seamless user experience to all.

