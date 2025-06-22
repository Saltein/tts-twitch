import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    token: '',
    channel: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.messages = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setChannel: (state, action) => {
            state.channel = action.payload
        },
    },
})

export const { setUsername, setToken, setChannel } = userSlice.actions
export default userSlice.reducer

export const getUsername = (state) => state.user.username
export const getToken = (state) => state.user.token
export const getChannel = (state) => state.user.channel
