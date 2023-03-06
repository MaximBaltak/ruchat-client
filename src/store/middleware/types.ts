import { MessageI } from './../../types/Message';
export interface ServerToClientListen {
    message: ( message: MessageI) => void
}
export interface ClientToServerListen {
    message: ( message: MessageI) => void
}