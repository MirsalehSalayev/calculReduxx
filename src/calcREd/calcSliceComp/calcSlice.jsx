import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
        value: 0,
    },
    reducers: {
        calculate: (state, action) => {
            let result;
            try {

                result = (new Function('return ' + action.payload))();
            } catch (error) {
                console.error("hata ", error);
            }
            return { ...state, value: result }
        }
    },
})

export const { calculate } = calcSlice.actions

export default calcSlice.reducer
