import React, {KeyboardEvent} from 'react'
import { Textarea } from '../../ui/Inputs/Textarea/Textarea'
import SendIcon from '@mui/icons-material/Send';
import styles from './ChatSend.module.scss'
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeInputMessage } from '../../store/slices/messages/messages.slice';
import { send } from '../../store/slices/webSocket/webSocket.slice';
export const ChatSend = () => {
    const valueInputMessage = useAppSelector<string>( state => state.messages.inputMessage)
    const dispatch = useAppDispatch()
    const change = (value: string) => { 
        dispatch(changeInputMessage({body: value}))
     }
     const sendMessage = () => {
        dispatch(send())
     }
     const sendMessageOnKeyboard =  ( e: KeyboardEvent<HTMLTextAreaElement>) => {
            if(e.key === 'Enter') dispatch(send())
     }
    return (
        <div className={styles.flex}>
            <Textarea
                width='370px'
                height='95px'
                placeholder='Введите сообщение'
                text={valueInputMessage}
                change={change}
                sendOnKey={sendMessageOnKeyboard} />
            <SendIcon 
            onClick={sendMessage} 
            sx={{
                width: '51px',
                height: '51px',
                cursor: 'pointer',
                color: '#82D2FF'
            }} />
        </div>
    )
}
