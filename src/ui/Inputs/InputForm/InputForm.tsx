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
    fontSize?: string,
    required?: boolean
}
export const InputForm: FC<InputFromProps> = ({
    onChange,
    status,
    value,
    placeholder,
    width,
    height,
    required = false,
    fontSize }) => {
    if (status === statusInput.Error) {
        return <div className={style.wrapper}>
            <input
                role='input'
                className={[style.input, style.error].join(' ')}
                value={value}
                placeholder={placeholder}
                style={{ width, height, fontSize }}
                onChange={(e) => onChange(e.target.value)}
                type="text" />
            {required ? <p role='paragraph-required' className={style.required}>Обязательное</p> : null}
        </div>
    } else if (status === statusInput.Rigth) {
        return <div className={style.wrapper}>
            <input
                role='input'
                className={[style.input, style.rigth].join(' ')}
                value={value}
                placeholder={placeholder}
                style={{ width, height, fontSize }}
                onChange={(e) => onChange(e.target.value)}
                type="text" />
            {required ? <p role='paragraph-required' className={style.required}>Обязательное</p> : null}
        </div>
    } else {
        return <div className={style.wrapper}>
            <input
                role='input'
                className={style.input}
                value={value}
                placeholder={placeholder}
                style={{ width, height, fontSize }}
                onChange={(e) => onChange(e.target.value)}
                type="text" />
            {required ? <p role='paragraph-required' className={style.required}>Обязательное</p> : null}
        </div>
    }
}
