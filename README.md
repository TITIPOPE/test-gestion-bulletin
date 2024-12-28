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
# Project Setup and Usage Guide

## Install Dependencies

Run the following command to install dependencies:

```bash
npm install
```

## Set Up the Database

1. Create a MySQL database.
2. Update the `config/config.json` file with your database credentials.

## Run Migrations

Run the following command to migrate the database schema:

```bash
npx sequelize-cli db:migrate
```

## Start the Application

Run the following command to start the application:

```bash
npm start
```

## Access the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Usage

### API Endpoints

#### User Management
- **POST** `/api/userapps` - Create a new user.
body
    {
        "name": "samir",
        "email": "samir@example.com",
        "role": "teacher",
        "password": "6657454745"
    }
- **GET** `/api/userapps` - Get all users.

#### Subject Management
- **POST** `/api/matieres` - Create a new subject.
body
    {
    "name": "pc"
    }
- **GET** `/api/matieres` - Get all subjects.

#### Note Management
- **POST** `/api/notes` - Create a new note.
body
    {
    "userappId": 7,  // ID for Jean Dupont
    "matiereId": 1,  // ID for Mathématiques
    "sessionId": 1,  // ID for the "Session d'examen de décembre"
    "note": 14,
    "maxGrade": 20
    }
- **GET** `/api/notes/:userId/:sessionId` - Get notes for a specific student.

#### Session Management
- **POST** `/api/sessions` - Create a new session.
body
    {
  "name": "Session d'examen de décembre",
  "startDate": "2024-12-01",
  "endDate": "2024-12-10"
  }

- **GET** `/api/sessions` - Get all sessions.

#### Bulletin Management
- **POST** `/api/bulletins` - Create a new bulletin.
body
    {
  "userappId": 7,
  "sessionId": 1
    }
- **GET** `/api/bulletins/:userId/:sessionId` - Get bulletin for a specific student.

---
## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.