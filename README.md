# Gestion Bulletin

## Project Overview
Gestion Bulletin is a web application designed to manage student grades, subjects, sessions, and bulletins. It provides functionalities for user authentication, note management, and generating bulletins for students.

## Features
- User registration and login
- Management of subjects (matieres)
- Note creation and retrieval for students
- Session management
- Bulletin generation based on student grades

## Technologies Used
- Node.js
- Express.js
- Sequelize (ORM for MySQL)
- MySQL
- JWT for authentication
- Bcrypt for password hashing

## Installation Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/TITIPOPE/gestion-bulletin.git
   cd gestion-bulletin
Install dependencies

bash

Run

npm install
Set up the database

Create a MySQL database and update the config/config.json file with your database credentials.
Run migrations

bash
Insert Code
Run
Copy code
npx sequelize-cli db:migrate
Start the application

bash
Insert Code
Run
Copy code
npm start
Access the application

Open your browser and navigate to http://localhost:3000.
Usage
API Endpoints
User Management

POST /api/userapps - Create a new user
POST /api/userapps/login - User login
GET /api/userapps - Get all users
Subject Management

POST /api/matieres - Create a new subject
GET /api/matieres - Get all subjects
Note Management

POST /api/notes - Create a new note
GET /api/notes/:userId/:sessionId - Get notes for a specific student
Session Management

POST /api/sessions - Create a new session
GET /api/sessions - Get all sessions
Bulletin Management

POST /api/bulletins - Create a new bulletin
GET /api/bulletins/:userId/:sessionId - Get bulletin for a specific student
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a new branch (git checkout -b feature/YourFeature)
Make your changes
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/YourFeature)
Open a pull request
License
This project is licensed under the ISC License - see the LICENSE file for details.