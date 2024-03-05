const TaskInput = ({ input, setInput, onAdd }) => (
  <div className='flex justify-center mb-4 '>
    <input
      className='border border-cyan-500 p-2 focus:outline-none'
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      className='text-cyan-900 bg-cyan-100 hover:bg-cyan-500 border-cyan-500 border transition duration-500 ease-linear font-bold py-2 px-4 border-l-0'
      onClick={onAdd}
    >
      Add Task
    </button>
  </div>
);

export default TaskInput;
