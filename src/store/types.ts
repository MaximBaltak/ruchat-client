import { MessagesState } from './slices/messages/types';
import { WebSocketState } from './slices/webSocket/types';
import {authFormState} from "./slices/authForm/types";
export interface AppState {
    webSocket: WebSocketState,
    messages: MessagesState,
    auth: authFormState
}
