import { FaTrash } from 'react-icons/fa';
import { useAppDispatch } from '../hooks/reduxHook';
import { deleteTask } from '../store/todoSlice';

const TaskList = ({ tasks, onToggle }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <ul className='mt-4 border-spacing-5 rounded-md flex w-full justify-between flex-col gap-5'>
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => onToggle(task.id)}
          className={`bg-cyan-100 hover:bg-cyan-400 transition duration-500 ease-linear p-5 flex justify-between rounded-lg cursor-pointer text-cyan-900 ${
            task.completed ? 'line-through' : ''
          }`}
        >
          {task.name}

          <button
            className='text-red-700 text-xl  hover:scale-110 transition duration-150 ease-linear'
            onClick={() => handleDelete(task.id)}
          >
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
