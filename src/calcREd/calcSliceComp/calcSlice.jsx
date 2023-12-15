import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
        value: 0,
    },
    reducers: {
        calculate: (state, action) => {
            // Doğrudan durumu değiştirmek yerine, yeni bir durum döndürün
            let result;
            try {
                // eslint-disable-next-line no-new-func
                result = (new Function('return ' + action.payload))();
            } catch (error) {
                console.error("Hesaplama hatası: ", error);
            }
            return { ...state, value: result }
        }
    },
})

export const { calculate } = calcSlice.actions

export default calcSlice.reducer
