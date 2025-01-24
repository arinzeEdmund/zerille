<h1 align="center">Welcome to Zerille task management app 👋</h1>


> This is a React Native Task Management App designed to manage tasks efficiently. The app allows users to perform the following actions:
`View all tasks on the Home Screen.`
`Add new tasks using the Add Task Screen.`
`Edit existing tasks via the Edit Task Screen.`
`Delete tasks from the list.`
The app uses Redux Toolkit for state management and React Navigation for navigating between screens.

## ✨ Features

** Splash Screen
<p align="center">
  ![Simulator Screen Shot - iPhone 14 Pro Max - 2025-01-24 at 09 03 44](https://github.com/user-attachments/assets/ea146205-3885-4b11-a548-70c7c4b24c21)

  <img width="700" align="center" src="https://github.com/user-attachments/assets/ea146205-3885-4b11-a548-70c7c4b24c21" alt="demo"/>
</p>
Just there to give you a warm welcome to our platform

**Home Screen**
<p align="center">
  <img width="182" alt="Screen Shot 2025-01-22 at 17 56 00" src="https://github.com/user-attachments/assets/82515f52-c640-4b4a-a085-5bebae95046b" />

  <img width="700" align="center" src="https://github.com/user-attachments/assets/82515f52-c640-4b4a-a085-5bebae95046b" alt="demo"/>
</p>

Displays a list of all tasks.

Allows users to mark tasks as complete or ongoing.

Provides options to edit or delete tasks.

**Add Task Screen**
<p align="center">
  ![Simulator Screen Shot - iPhone 14 Pro Max - 2025-01-24 at 09 04 03](https://github.com/user-attachments/assets/e09d5c4a-4139-4487-bccc-10f193106010)

  <img width="700" align="center" src="https://github.com/user-attachments/assets/e09d5c4a-4139-4487-bccc-10f193106010" alt="demo"/>
</p>

Form to input a task title and description.

Option to set the completion status of the task.

Saves new tasks to the Redux store.

**Edit Task Screen**
<p align="center">
  ![Simulator Screen Shot - iPhone 14 Pro Max - 2025-01-24 at 09 04 13](https://github.com/user-attachments/assets/46a5079c-779e-4fbf-9566-fc52787480e3)

  <img width="700" align="center" src="https://github.com/user-attachments/assets/46a5079c-779e-4fbf-9566-fc52787480e3" alt="demo"/>
</p>

Pre-populates the form with the selected task's details.

Allows updating the title, description, or completion status.

Saves the updated task back to the Redux store.

**Delete Task Functionality**
Prompts the user with a confirmation alert before deleting a task.
Removes the task from the Redux store upon confirmation.

**Other Screens added to fill up unused spaces**
<p align="center">
![Simulator Screen Shot - iPhone 14 Pro Max - 2025-01-24 at 09 04 21](https://github.com/user-attachments/assets/0fb5a26f-da34-44ff-a9b0-394cead8e58f)
![Simulator Screen Shot - iPhone 14 Pro Max - 2025-01-24 at 09 04 27](https://github.com/user-attachments/assets/00adf0fd-3ed0-4bc7-827d-8e9b9766e21e)

  <img width="700" align="center" src="https://github.com/user-attachments/assets/0fb5a26f-da34-44ff-a9b0-394cead8e58f" alt="demo"/>
  <img width="700" align="center" src="https://github.com/user-attachments/assets/00adf0fd-3ed0-4bc7-827d-8e9b9766e21e" alt="demo"/>
</p>


## ✨Installation and Setup

**Prerequisites**

Node.js (v14 or later)

npm or yarn

Expo CLI

**Steps to Run the App** 
Clone this repository:
```sh git clone https://github.com/your-username/task-manager-app.git```
Navigate to the project directory:
```cd task-manager-app```
Install dependencies:
```yarn install```
Start the Expo development server:
``` npx expo start```
Use the Expo Go app (iOS/Android) or an emulator to view the app.


## ✨ Screens Overview

** 1. Home Screen **
Purpose:

Displays all tasks in a scrollable list.

Allows users to edit, delete, or view task details.

Features: Task status indicator (e.g., Completed, In Progress).

Delete button with confirmation alert.

Edit button to navigate to the Edit Task Screen with the task's details.

**2. Add Task Screen**

Purpose: Form to create a new task.

Form Fields: Title (text input)

Description (text input)

Completion Status (toggle or dropdown)

Actions: Add button to save the task.

Cancel button to return to the Home Screen.

**3. Edit Task Screen**

Purpose:Allows editing of an existing task.

Form Fields:Pre-filled title and description fields.

Completion Status field.

Actions:Save button to update the task.

Cancel button to return to the Home Screen.

## ✨ State Management

The app uses Redux Toolkit for state management. The state is structured as follows:
Task Slice


```json
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

```

**Sample Redux Flow**

Adding a Task:
```json 
dispatch(addTask({ id: '1', title: 'New Task', description: 'Task Description', completionStatus: false }));
```

Editing a Task:
```json 
dispatch(editTask({ id: '1', title: 'Updated Task', description: 'Updated Description', completionStatus: true }));
```

Editing a Task:
```json 
dispatch(deleteTask('1'));
```

## ✨ Acknowledgments

This app was built using:
Expo
React Redux


## 🚀 License

This project is open-source and available under the MIT License.
Feel free to fork, modify, and enhance this project. If you encounter any issues, please create a GitHub issue or reach out.


## Author

👤 **Arinzechukwu Edmund**

- LinkedIn: [Arinzechukwu Edmund](https://www.linkedin.com/in/arinzechukwu-edmund-015314120/)
---

_This Project is done with ❤️ by Arizechukwu edmund [portfolio website](http://arinzeedmund.online)_
