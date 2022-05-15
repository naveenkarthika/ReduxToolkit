const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

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
        builer.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecream--
        })
    }
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecream--
    //     }
    // }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;