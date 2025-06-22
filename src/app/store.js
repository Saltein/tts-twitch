import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../entities/message/model/chatSlice';

export const store = configureStore({
    reducer: {
        chat: chatReducer,
    },
})