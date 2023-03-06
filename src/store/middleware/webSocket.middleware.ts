import { MessageI } from './../../types/Message';
import { MessagesState } from './../slices/messages/types';
import { WebSocketState } from './../slices/webSocket/types';
import { Middleware } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { AppState } from "../types";
import { typeConnect } from '../../types/typeConnect';
import appConfig from '../../app-config.config.json'
import { ClientToServerListen, ServerToClientListen } from './types';
import { addMessage, changeInputMessage } from '../slices/messages/messages.slice';
import { v4 } from 'uuid'
let socket: Socket<ServerToClientListen, ClientToServerListen>

export const webSocketMiddleware: Middleware<{}, AppState> = store => next => action => {
    const webSocketState: WebSocketState = store.getState().webSocket
    const messagesState: MessagesState = store.getState().messages
    if (webSocketState.connect === typeConnect.Disconnected && !socket) {
        socket = io(appConfig.webSocket.connect)
        socket.on('connect',() =>{
            console.log("Вы успешно подключились к чату")
        })
        socket.on('connect_error',() =>{
            console.log("Вы не подключены")
        })
        socket.on('message', (message) => {
            if (message.socketId === socket.id) message.isFrom = true
            if (message.socketId !== socket.id) message.isFrom = false
            store.dispatch(addMessage({ message }))
        })

    } else if (webSocketState.connect === typeConnect.Connected && socket) {
        if (action.type === 'webSocket/send' && messagesState.inputMessage) {
            const message: MessageI = {
                id: v4(),
                socketId: socket.id,
                body: messagesState.inputMessage,
                isFrom: true
            }
            socket.emit('message', message)
            store.dispatch(changeInputMessage({body: ''}))
        }
    }

    next(action)
}