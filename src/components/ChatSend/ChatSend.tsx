import React from 'react'
import { Textarea } from '../../ui/Textarea/Textarea'
import SendIcon from '@mui/icons-material/Send';
import styles from './ChatSend.module.scss'
export const ChatSend = () => {
    const change = () => { }
    return (
        <div className={styles.flex}>
            <Textarea
                width='370px'
                height='95px'
                placeholder='Введите сообщение'
                text='-'
                change={change} />
                    <SendIcon sx={{
                        width:'51px',
                        height:'51px', 
                        cursor:'pointer',
                        color:'#82D2FF'
                        }}/>
        </div>
    )
}
