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
      {tasks.length === 0 ? (
        <li className='text-center text-cyan-700 text-lg mt-10'>
          You have not added any tasks
        </li>
      ) : (
        tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => onToggle(task.id)}
            className={`bg-cyan-100 hover:bg-cyan-400 transition duration-500 ease-linear p-5 flex justify-between rounded-lg cursor-pointer text-cyan-900 ${
              task.completed ? 'line-through' : ''
            }`}
          >
            {task.name}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(task.id);
              }}
              className='text-red-700 text-xl hover:scale-110 transition duration-150 ease-linear'
            >
              <FaTrash />
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
