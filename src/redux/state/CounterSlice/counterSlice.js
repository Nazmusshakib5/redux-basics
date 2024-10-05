import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
        setRandomValue:(state,action)=>{
            const num=Number(action.payload)
            state.value=num
        }
    }
})


export const {increment,decrement,setRandomValue} = CounterSlice.actions
export default CounterSlice.reducer