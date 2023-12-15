import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counterRed/counterSliceComp/counterSlice'
import todoReducer from '../TodoRed/TodoSliceComp/TodoSlice'
import calcReducer from "../calcREd/calcSliceComp/calcSlice"
export default configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        calc: calcReducer

    },
})
