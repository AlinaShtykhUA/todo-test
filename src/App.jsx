import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/reduxHook';
import { addTask, toggleTask, filterTasks, setTasks } from './store/todoSlice';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [input, setInput] = useState('');
  const { tasks, filter } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const maxChar = 50;

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      parsedTasks.length > 0 && dispatch(setTasks(parsedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
    <section className='container mx-auto p-4'>
      <h1 className='text-center text-4xl font-bold text-cyan-700 uppercase mb-4'>
        Todo List
      </h1>
      <div className='flex gap-4 justify-center flex-wrap'>
        <TaskInput input={input} setInput={setInput} onAdd={handleAddTask} />{' '}
        <div className='flex justify-center mb-4'>
          <select
            className='border-2 border-cyan-500 rounded p-2'
            onChange={handleFilterChange}
          >
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='current'>Current</option>
          </select>
        </div>
      </div>

      <div className='text-center mt-4'>
        <span className='text-teal-700'>
          Completed Tasks: {tasks.filter((t) => t.completed).length}
        </span>
        <span className='text-red-700 ml-4'>
          Uncompleted Tasks: {tasks.filter((t) => !t.completed).length}
        </span>
      </div>

      <TaskList tasks={filteredTasks} onToggle={handleToggleTask} />
    </section>
  );
};

export default App;
