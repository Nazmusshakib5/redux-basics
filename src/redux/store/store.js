import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../state/CounterSlice/counterSlice'
import todoReducer from '../state/Todo/todoSlice'

export default configureStore({

    reducer:{
        counter:counterReducer,
        todo:todoReducer
    }
})