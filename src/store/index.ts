import { webSocketMiddleware } from './middleware/webSocket.middleware';
import {
    AnyAction,
    configureStore,
    Middleware,
    MiddlewareArray, ThunkMiddleware
} from "@reduxjs/toolkit";
import { AppState } from "./types";
import webSocketReducer from './slices/webSocket/webSocket.slice'
import MessagesReducer from './slices/messages/messages.slice'
import AutFormReducer from './slices/authForm/authForm.slice'
export const store = configureStore<AppState,AnyAction,MiddlewareArray<[ThunkMiddleware<AppState, AnyAction, undefined>,Middleware<{}, AppState>]>>({
    reducer: {
        webSocket: webSocketReducer,
        messages: MessagesReducer,
        auth:  AutFormReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(webSocketMiddleware),
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
