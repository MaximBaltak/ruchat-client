import React, { ChangeEvent, FC, KeyboardEvent } from 'react'
import styles from './Textarea.module.scss'
interface TextareaProps {
    text: string,
    change: (value: string) => void,
    sendOnKey: (value: KeyboardEvent<HTMLTextAreaElement>)  => void
    placeholder: string,
    width: string,
    height: string
}
export const Textarea: FC<TextareaProps> = ({ text, change, placeholder,width,height,sendOnKey }) => {
    return <textarea
        value={text}
        onKeyDown={sendOnKey}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => change(e.target.value)}
        className={styles.textarea}
        style={{width, height}}
        id="textarea-chat"
        placeholder={placeholder}
    ></textarea>
}
