import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: [],
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.unshift(action.payload)
        },
    },
})

export const { addMessage } = chatSlice.actions
export default chatSlice.reducer

export const getAllMessages = (state) => state.chat.messages
export const getLastMessage = (state) => state.chat.messages[0]