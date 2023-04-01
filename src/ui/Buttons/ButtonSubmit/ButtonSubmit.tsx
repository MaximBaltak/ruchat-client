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
    disabled?: boolean
}
export const ButtonSubmit: FC<ButtonSubmitProps> = ({
    click,
    background,
    text,
    width,
    color,
    height,
    fontSize,
    disabled = false
}) => {
    return <button
        role='submit'
        className={style.button}
        disabled={disabled}
        style={{ background, width, height, color, fontSize }}
        onClick={click}>{text}</button>
}
