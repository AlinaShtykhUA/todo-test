import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
  filter: 'all',
};
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: uuidv4(), // Generate a unique ID
        name: action.payload,
        completed: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    filterTasks: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, filterTasks } = todoSlice.actions;
export default todoSlice.reducer;
