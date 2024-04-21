// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import blogReducer from '../features/blog/BlogSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        user: userReducer,
        blog: blogReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
