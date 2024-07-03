import { useState } from 'react';
import Task from './components/Task';

export default function App() {
  const initialTodo = [
    { id: 1, label: 'Lau nhà', isChecked: false },
    { id: 2, label: 'Quét nhà', isChecked: true },
  ];
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState(initialTodo);

  const handleCheck = (id) => {
    const foundIndex = todo.findIndex((item) => item.id === id);
    const newTodo = [...todo];
    newTodo[foundIndex].isChecked = !todo[foundIndex].isChecked;
    setTodo(newTodo);
  };

  const handleRemove = (id) => {
    setTodo(() => {
      return todo.filter((item) => item.id !== id);
    });
  };

  const handleAdd = () => {
    const newTodo = {
      id: todo.length + 1,
      label: input,
      isChecked: false,
    };
    setTodo((pre) => [newTodo, ...pre]);
    setInput('');
  };

  const handleClear = () => {
    setTodo(() => {
      return todo.filter((item) => item.isChecked === false);
    });
  };

  return (
    <div className='App'>
      <div className='w-full h-screen bg-gray-100 pt-8'>
        <div className='bg-white p-3 max-w-md mx-auto'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold'>ToDo App</h1>
            <div className='mt-4 flex'>
              <input
                className='w-80 border-b-2 border-gray-500 text-black'
                type='text'
                placeholder='Enter your task here'
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button
                className='ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex'
                onClick={() => {
                  handleAdd();
                }}
              >
                <svg
                  className='h-6 w-6'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  {' '}
                  <path stroke='none' d='M0 0h24v24H0z' />{' '}
                  <circle cx='12' cy='12' r='9' />{' '}
                  <line x1='9' y1='12' x2='15' y2='12' />{' '}
                  <line x1='12' y1='9' x2='12' y2='15' />
                </svg>
                <span>Add</span>
              </button>
            </div>
          </div>
          <div className='mt-8'>
            <ul>
              {todo?.map((task) => (
                <li key={task.id} className='p-2 rounded-lg'>
                  <Task
                    task={task}
                    handleRemove={handleRemove}
                    handleCheck={handleCheck}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-8'>
            <button
              className='border-2 border-red-500 p-2 text-red-500'
              onClick={() => {
                handleClear();
              }}
            >
              Clear Completed Task
            </button>
            <button
              className='border-2 border-indigo-500 p-2 text-indigo-500 ml-4'
              onClick={() => {
                setTodo(initialTodo);
              }}
            >
              Reset Todo List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
