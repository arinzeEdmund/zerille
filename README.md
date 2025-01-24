Task Management App

This is a React Native Task Management App designed to manage tasks efficiently. The app allows users to perform the following actions:
View all tasks on the Home Screen.
Add new tasks using the Add Task Screen.
Edit existing tasks via the Edit Task Screen.
Delete tasks from the list.
The app uses Redux Toolkit for state management and React Navigation for navigating between screens.
Features

Home Screen
Displays a list of all tasks.
Allows users to mark tasks as complete or ongoing.
Provides options to edit or delete tasks.
Add Task Screen
Form to input a task title and description.
Option to set the completion status of the task.
Saves new tasks to the Redux store.
Edit Task Screen
Pre-populates the form with the selected task's details.
Allows updating the title, description, or completion status.
Saves the updated task back to the Redux store.
Delete Task Functionality
Prompts the user with a confirmation alert before deleting a task.
Removes the task from the Redux store upon confirmation.
Installation and Setup

Prerequisites
Node.js (v14 or later)
npm or yarn
Expo CLI
Steps to Run the App
Clone this repository:
git clone https://github.com/your-username/task-manager-app.git
Navigate to the project directory:
cd task-manager-app
Install dependencies:
npm install
Start the Expo development server:
expo start
Use the Expo Go app (iOS/Android) or an emulator to view the app.
Screens Overview

1. Home Screen
Purpose:
Displays all tasks in a scrollable list.
Allows users to edit, delete, or view task details.
Features:
Task status indicator (e.g., Completed, In Progress).
Delete button with confirmation alert.
Edit button to navigate to the Edit Task Screen with the task's details.
2. Add Task Screen
Purpose:
Form to create a new task.
Form Fields:
Title (text input)
Description (text input)
Completion Status (toggle or dropdown)
Actions:
Add button to save the task.
Cancel button to return to the Home Screen.
3. Edit Task Screen
Purpose:
Allows editing of an existing task.
Form Fields:
Pre-filled title and description fields.
Completion Status field.
Actions:
Save button to update the task.
Cancel button to return to the Home Screen.
Navigation

The app uses React Navigation with the following structure:
Bottom Tab Navigator:
Home
Add Task
Stack Navigator:
Home Screen
Edit Task Screen
State Management

The app uses Redux Toolkit for state management. The state is structured as follows:
Task Slice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description, completionStatus } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
        task.completionStatus = completionStatus;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
Sample Redux Flow

Adding a Task:
dispatch(addTask({ id: '1', title: 'New Task', description: 'Task Description', completionStatus: false }));
Editing a Task:
dispatch(editTask({ id: '1', title: 'Updated Task', description: 'Updated Description', completionStatus: true }));
Deleting a Task:
dispatch(deleteTask('1'));
Acknowledgments

This app was built using:
React Native
Redux Toolkit
Expo
Feel free to fork, modify, and enhance this project. If you encounter any issues, please create a GitHub issue or reach out.
License

This project is open-source and available under the MIT License.

1/2







