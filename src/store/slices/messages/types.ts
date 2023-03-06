import { MessageI } from './../../../types/Message';
export interface MessagesState {
    messages: MessageI[],
    inputMessage: string
}