import { webSocketMiddleware } from './middleware/webSocket.middleware';
import {
    AnyAction,
    configureStore,
} from "@reduxjs/toolkit";
import {AppMiddleware, AppState} from "./types";
import webSocketReducer from './slices/webSocket/webSocket.slice'
import MessagesReducer from './slices/messages/messages.slice'
import AutFormReducer from './slices/authForm/authForm.slice'
import UserReducer from './slices/user/user.slice'
export const store = configureStore<AppState,AnyAction,AppMiddleware>({
    reducer: {
        webSocket: webSocketReducer,
        messages: MessagesReducer,
        auth:  AutFormReducer,
        user: UserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(webSocketMiddleware),
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
