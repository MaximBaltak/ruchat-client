import React, { FC } from 'react'
import { MessageI } from '../../types/Message'
import styles from './Message.module.scss'
interface MessageProps {
    message: MessageI
}
const Message: FC<MessageProps> = ({ message }) => {
    if (message.isFrom) {
        return (
            <div role='generic' className={styles['container-from']}>
                <p role='paragraph'>{message.body}</p>
            </div>
        )
    } else {
        return (
            <div role='generic' className={styles['container-to']}>
                <p role='paragraph'>{message.body}</p>
            </div>
        )
    }
}
export default Message
