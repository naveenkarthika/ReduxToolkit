import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './blocks/cake/cakeSlice';
import icecreamReducer from './blocks/icecream/icecreamSlice';
import userReducer from './blocks/user/userSlice';
import { createLogger } from 'redux-logger';

const logger = createLogger() // logger

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;
