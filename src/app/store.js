import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../entities/message/model/chatSlice';
import userReducer from '../entities/user/model/userSlice'

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        user: userReducer,
    },
})