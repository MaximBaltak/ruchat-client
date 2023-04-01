import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CurrentUser, UserState} from "./types";
const initialState : UserState = {
    auth: false,
    user: null
}
const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser (state, action: PayloadAction<{user: CurrentUser}>) {
            state.auth = true
            state.user = {...action.payload.user}
        },
        deleteUser (state) {
            state.auth = false
            state.user = null
        },
        toggleAuthUser (state, action: PayloadAction<boolean>) {
            state.auth = action.payload
        }
    }
})
export const { addUser, deleteUser,toggleAuthUser} = UserSlice.actions
export default UserSlice.reducer
