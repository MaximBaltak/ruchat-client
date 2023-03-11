import React, { FC } from 'react'
import style from './ErrorText.module.scss'
interface ErrorTextProps {
    text: string,
    fontSize?: string
}
export const ErrorText: FC<ErrorTextProps> = ({ text, fontSize }) => {
    return <p role='paragraph' className={style.error} style={{ fontSize }}>{text}</p>
}
