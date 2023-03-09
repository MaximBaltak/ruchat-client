import React, { FC } from 'react'
import style from './ButtonSubmit.module.scss'
interface ButtonSubmitProps {
    click: () => void
    background?: string,
    text: string,
    width: string,
    color?: string,
    height?: string,
    fontSize?: string,
}
export const ButtonSubmit: FC<ButtonSubmitProps> = ({
    click,
    background,
    text,
    width,
    color,
    height,
    fontSize
}) => {
    return <button
        className={style.button}
        style={{ background, width, height, color, fontSize }}
        onClick={click}>{text}</button>
}
