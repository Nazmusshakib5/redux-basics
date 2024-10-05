import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        value:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.value.push(action.payload.current.value)
            action.payload.current.value=''
        },
        deleteTodo:(state,action)=>{
            state.value.splice(action.payload,1)
        },
        editTodo:(state,action)=>{
            state.value.splice(action.payload['index'],1,action.payload['todo'])
        },
    }

})

export const {addTodo,deleteTodo,editTodo} = TodoSlice.actions
export default TodoSlice.reducer