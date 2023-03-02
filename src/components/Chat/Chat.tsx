import React from 'react'
import { MessageI } from '../../types/Message'
import Message from '../../ui/Message/Message'
import { ChatSend } from '../ChatSend/ChatSend'
import styles from './Chat.module.scss'
const message: MessageI = {
    id: '3',
    socketId: '4',
    body:'test 1',
    isFrom: true
}
const message2: MessageI = {
    id: '3',
    socketId: '4',
    body:'test 2',
    isFrom: false
}
export const Chat = () => {
  return (
    <div className={styles.wrapper}>
        <ul className={styles.chat}>
            <li style={{justifyContent: message.isFrom ? 'start': 'end'}}>
                <Message message={message}/>
            </li>
            <li style={{justifyContent: message2.isFrom ? 'start': 'end'}}>
                <Message message={message2}/>
            </li>
        </ul>
        <ChatSend/>
    </div>
  )
}
