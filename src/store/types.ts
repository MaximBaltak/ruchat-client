import { MessagesState } from './slices/messages/types';
import { WebSocketState } from './slices/webSocket/types';
import {authFormState} from "./slices/authForm/types";
import {AnyAction, Middleware, MiddlewareArray, ThunkMiddleware} from "@reduxjs/toolkit";
import {UserState} from "./slices/user/types";
export interface AppState {
    webSocket: WebSocketState,
    messages: MessagesState,
    auth: authFormState,
    user: UserState
}
export type AppMiddleware = MiddlewareArray<[ThunkMiddleware<AppState, AnyAction, undefined>,Middleware<{}, AppState>]>
