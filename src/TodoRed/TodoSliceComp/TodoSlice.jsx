import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [],
    },
    reducers: {
        handleAddTodo: (state, action) => {
            return { ...state, value: [...state.value, action.payload] }
        },
        handleRemoveTodo: (state, action) => {
            return { ...state, value: state.value.filter(item => item.id !== action.payload) }
        }
    },
})

export const { handleAddTodo, handleRemoveTodo } = todoSlice.actions

export default todoSlice.reducer
