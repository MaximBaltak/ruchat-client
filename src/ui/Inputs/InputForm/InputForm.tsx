import React, { FC } from 'react'
import style from './InputForm.module.scss'
import { statusInput } from '../../../types/statusInput'
interface InputFromProps {
    onChange: (value: string) => void
    status: statusInput,
    value: string,
    placeholder: string,
    width?: string,
    height?: string,
    fontSize?: string
}
export const InputForm: FC<InputFromProps> = ({
    onChange,
    status,
    value,
    placeholder,
    width,
    height,
    fontSize }) => {
    if (status === statusInput.Error) {
        return <input
            className={[style.input, style.error].join(' ')}
            value={value}
            placeholder={placeholder}
            style={{ width, height, fontSize }}
            onChange={(e) => onChange(e.target.value)}
            type="text" />
    } else if (status === statusInput.Rigth) {
        return <input
            className={[style.input, style.rigth].join(' ')}
            value={value}
            placeholder={placeholder}
            style={{ width, height, fontSize }}
            onChange={(e) => onChange(e.target.value)}
            type="text" />
    } else {
        return <input
            className={style.input}
            value={value}
            placeholder={placeholder}
            style={{ width, height, fontSize }}
            onChange={(e) => onChange(e.target.value)}
            type="text" />
    }
}
