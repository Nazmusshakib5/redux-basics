import React from 'react';
import TodoTable from './TodoTable';
import { addTodo } from '../redux/state/Todo/todoSlice';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

const Todo = () => {
    
    const numRef=useRef()

    const dispatch=useDispatch()


    return (
        <div className='max-w-5xl mx-auto p-5 mt-20 mb-20 bg-neutral-800 
        mb-5 rounded-lg'>
            <p className='text-white my-5 text-3xl font-semibold'>Todo List</p>
                        <div class="grid grid-cols-5 gap-4">
           <div className='col-span-4'>
            <input
                ref={numRef} 
                id="input" 
                type="text" 
                placeholder="Enter any task" 
                class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
            />
           </div>
            <button 
                type="submit" 
                class="bg-indigo-500 text-white rounded-md p-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 col-span-1"
                onClick={()=>dispatch(addTodo(numRef))}
            >
                Add Todo
            </button>
            </div>
            <TodoTable/>
        </div>
    );
};

export default Todo;