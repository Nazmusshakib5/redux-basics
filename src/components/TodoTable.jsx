import { useSelector } from 'react-redux';
import { TodoDeleteAlert } from './alerts/todoDeleteAlert';
import { TodoEditAlert } from './alerts/todoEditAlert';

const TodoTable = () => {

    const todoItems=useSelector((state)=>state.todo.value)
    return (
        <div>
            <div>
                <table className='text-white w-full mt-5'>
                    <thead className=''>
                        <tr className='grid grid-cols-12 shadow-sm shadow-neutral-600 px-3 py-2 mb-1 font-semibold'>
                            <td className='col-span-1'>No</td>
                            <td className='col-span-7'>Task name</td>
                            <td className='col-span-2'>Edit</td>
                            <td className='col-span-2'>Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                   {
                    todoItems.map((todo,i)=>(
                        <tr key={i} className='grid grid-cols-12 shadow-sm shadow-neutral-600 px-3 mb-1 items-center py-2 text-neutral-200'>
                        <td className='col-span-1'>{i+1}</td>
                        <td className='col-span-7'>{todo}</td>
                        <td className='col-span-2'><button className='bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        onClick={()=>TodoEditAlert(i,todo)}
                        >Edit</button></td>
                        <td className='col-span-2'><button className='bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        onClick={()=>TodoDeleteAlert(i)}
                        >Remove</button></td>
                    </tr>
                    ))
                   }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoTable;