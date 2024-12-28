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
- **POST** `/api/userapps/login` - User login.
- **GET** `/api/userapps` - Get all users.

#### Subject Management
- **POST** `/api/matieres` - Create a new subject.
- **GET** `/api/matieres` - Get all subjects.

#### Note Management
- **POST** `/api/notes` - Create a new note.
- **GET** `/api/notes/:userId/:sessionId` - Get notes for a specific student.

#### Session Management
- **POST** `/api/sessions` - Create a new session.
- **GET** `/api/sessions` - Get all sessions.

#### Bulletin Management
- **POST** `/api/bulletins` - Create a new bulletin.
- **GET** `/api/bulletins/:userId/:sessionId` - Get bulletin for a specific student.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes.
4. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
5. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
6. Open a pull request.

---

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
