import { MessagesState } from './slices/messages/types';
import { WebSocketState } from './slices/webSocket/types';
export interface AppState {
    webSocket: WebSocketState,
    messages: MessagesState
}
