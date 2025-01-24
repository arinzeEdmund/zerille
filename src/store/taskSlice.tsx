import { createSlice } from '@reduxjs/toolkit';

interface Task {
    id: string; // Unique identifier for each task
    title: string;
    description: string;
    completionStatus: boolean;
  }
  const initialState: { tasks: Task[] } = {
    tasks: [], // Array to store tasks
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
