import React, { FC } from 'react'
import style from './TextButton.module.scss'
interface TextButtonProps {
    click: () => void,
    text: string,
    color: string,
    fontSize: string
}
export const TextButton: FC<TextButtonProps> = ({ click, text, color, fontSize }) => {
    return <button
        role={'submit'}
        className={style.textButton}
        style={{ color, fontSize }}
        onClick={click}>{text}</button>
}
