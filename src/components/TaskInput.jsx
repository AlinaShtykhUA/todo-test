const TaskInput = ({ input, setInput, onAdd }) => (
  <div className='flex justify-center mb-4'>
    <input
      className='border-2 border-gray-200 rounded p-2 mr-2'
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={onAdd}
    >
      Add Task
    </button>
  </div>
);

export default TaskInput;
