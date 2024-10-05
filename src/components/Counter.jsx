import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,setRandomValue } from '../redux/state/CounterSlice/counterSlice';
import { useRef } from 'react';

const Counter = () => {

    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()

    const numRef=useRef()

    return (
        <div className='flex justify-center items-center mt-16'>
           <div className="w-full max-w-sm p-6 bg-neutral-900 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="bg-neutral-700 text-white text-center p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold">Counter Section</h2>
      </div>

      {/* Counter Display */}
      <div className="bg-neutral-800 p-6 text-center">
        <p className="text-3xl font-semibold text-white">{count}</p>
      </div>

      {/* Button Section */}
      <div className="bg-neutral-800 p-4 rounded-b-lg flex justify-around items-center">
        <button
          className="bg-white text-black font-bold py-2  px-8 rounded-lg hover:bg-gray-100 text-2xl"
        onClick={()=>dispatch(decrement())}
        >
          -
        </button>
        <button
          className="bg-white text-black font-bold py-2 px-8 rounded-lg hover:bg-gray-100 text-2xl"
          onClick={()=>dispatch(increment())}
          >
          +
        </button>
      </div>
      <div className='flex flex-col mt-8 space-y-4'>
        <label htmlFor='randomNum' className='text-white text-center text-2xl font-bold'>Starting Offset</label>
        <input ref={numRef} type='number' id='randomNum' className='border border-black bg-gray-100 rounded-lg px-2 py-2' placeholder='random number'></input>
        <button className='bg-neutral-800 text-white text-xl py-2 rounded-lg'
        onClick={()=>dispatch(setRandomValue(numRef.current.value))}
        >Submit</button>
      </div>
    </div>
        </div>
    );
};

export default Counter;