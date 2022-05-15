import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
    numOfIcecream: 20
}
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecream--
        },
        restoked: (state, action) => {
            state.numOfIcecream += action.payload
        }
    },
    extraReducers: (builer) => {
        builer.addCase(cakeOrdered, (state) => {
            state.numOfIcecream--
        })
    }
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecream--
    //     }
    // }
})

export const { ordered, restoked } = icecreamSlice.actions;
export default icecreamSlice.reducer;
