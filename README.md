# TaskMate - To-Do List Application

TaskMate is a full-stack to-do list application built with Node.js, Express.js, MongoDB on the server-side, and Angular on the client-side. The app allows users to create, read, update, and delete tasks to manage their to-do work list efficiently.

## Features

- **Add Task**: Users can create new tasks.
- **View Tasks**: Display and navigate through a list of tasks.
- **Edit Task**: Users can update existing tasks.
- **Delete Task**: Users can delete tasks from their list.
- **Responsive UI**: User-friendly design optimized for both desktop and mobile views.
- **Testing**: Unit tests for both client-side and server-side.

## Technologies Used

### Server-Side:
- **Node.js**
- **Express.js**
- **MongoDB** for storing tasks
- **Mocha** for server-side unit tests

### Client-Side:
- **Angular** for the frontend
- **Angular CLI** for setting up the environment
- **Angular Default Unit Test Libraries** for UI testing

## API Endpoints

| HTTP Method | Endpoint            | Description                      |
|-------------|---------------------|----------------------------------|
| `GET`       | `/api/tasks`        | Retrieve all tasks               |
| `POST`      | `/api/task`         | Create a new task                |
| `PUT`       | `/api/task/:id`     | Update a task by ID              |
| `DELETE`    | `/api/task/:id`     | Delete a task by ID              |

## Frontend Components

1. **Task List Component**: Displays the list of tasks.
2. **Task Form Component**: Provides a form for creating and updating tasks.

## Services

- **Task Service**: Handles API calls to interact with the backend and manage tasks.

## Installation & Setup

### Prerequisites:
- Node.js installed
- MongoDB installed and running
- Angular CLI installed

### Backend (Server-Side):
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd TaskMate
   ```
2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend (Client-Side):
1. Navigate to the frontend folder:
   ```bash
   cd ../client
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Run the Angular app:
   ```bash
   ng serve
   ```

### Access the App:
- Open your browser and go to `http://localhost:4200` to access TaskMate.

## Testing

### Server-Side (Mocha):
1. Run the following command to execute the unit tests:
   ```bash
   npm test
   ```

### Client-Side (Angular Default Testing):
1. Run the following command to execute UI unit tests:
   ```bash
   ng test
   ```

## License
This project is licensed under the MIT License.
```

This README covers all the important aspects of the project and is a good start for sharing it on GitHub. Let me know if you need any adjustments!
