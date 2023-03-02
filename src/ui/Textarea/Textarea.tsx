import React, { ChangeEvent, FC } from 'react'
import styles from './Textarea.module.scss'
interface TextareaPorps {
    text: string,
    change: (value: string) => void,
    placeholder: string,
    width: string,
    height: string
}
export const Textarea: FC<TextareaPorps> = ({ text, change, placeholder,width,height }) => {
    return <textarea
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => change(e.target.value)}
        className={styles.textarea}
        style={{width, height}}
        id="textarea-chat"
        placeholder={placeholder}
    ></textarea>
}
