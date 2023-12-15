import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
        value: 0,
    },
    reducers: {
        calculate: (state, action) => {

            return { ...state, value: eval(action.payload) }
        }
    },
})

export const { calculate } = calcSlice.actions

export default calcSlice.reducer
