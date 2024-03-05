import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/reduxHook';
import { addTask, toggleTask, filterTasks } from './store/todoSlice';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [input, setInput] = useState('');
  const { tasks, filter } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const maxChar = 50;

  const handleAddTask = () => {
    if (input.trim().length > 0 && input.trim().length <= maxChar) {
      dispatch(addTask(input.trim()));
      setInput('');
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'current') return !task.completed;
    return true;
  });

  return (
    <div className='container mx-auto p-4'>
      <TaskInput input={input} setInput={setInput} onAdd={handleAddTask} />

      <div className='flex justify-center mb-4'>
        <select
          className='border-2 border-gray-200 rounded p-2'
          onChange={handleFilterChange}
        >
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='current'>Current</option>
        </select>
      </div>

      <TaskList tasks={filteredTasks} onToggle={handleToggleTask} />

      <div className='text-center mt-4'>
        <span className='text-green-500'>
          Completed Tasks: {tasks.filter((t) => t.completed).length}
        </span>
        <span className='text-red-500 ml-4'>
          Uncompleted Tasks: {tasks.filter((t) => !t.completed).length}
        </span>
      </div>
    </div>
  );
};

export default App;
