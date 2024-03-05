const TaskList = ({ tasks, onToggle }) => (
  <ul>
    {tasks.map((task) => (
      <li
        key={task.id}
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
      >
        {task.name}
      </li>
    ))}
  </ul>
);

export default TaskList;
