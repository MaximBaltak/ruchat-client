import React, { FC, useState } from 'react'
import style from './PasswordInputForm.module.scss'
import { statusInput } from '../../../types/statusInput'
interface PasswordInputFromProps {
    onChange: (value: string) => void
    status: statusInput,
    value: string,
    placeholder: string,
    width?: string,
    height?: string,
    fontSize?: string,
    required?: boolean
}
export const PasswordInputForm: FC<PasswordInputFromProps> = ({
    onChange,
    status,
    value,
    placeholder,
    width,
    height,
    required = false,
    fontSize }) => {
      const [textButton, setTextButton] = useState<string>('Показать')
      const [isHide, setIsHide] = useState<boolean>(true)
      const toggle = () => {
        if(isHide) {
          setIsHide(false)
          setTextButton('Спрятать')
        } else {
          setIsHide(true)
          setTextButton('Показать')
        }
      }
    if (status === statusInput.Error) {
        return <div className={style.wrapper}>
          <input
            role="input"
            className={[style.input, style.error].join(' ')}
            value={value}
            placeholder={placeholder}
            style={{ width, height, fontSize }}
            onChange={(e) => onChange(e.target.value)}
            type={isHide ? 'password': 'text'} />
            { required ? <p role='paragraph-required' className={style.required}>Обязательное</p>: null}
            <p role='paragraph-toggle' onClick={toggle} className={style.toggle}>{textButton}</p>
        </div>
    } else if (status === statusInput.Rigth) {
        return <div className={style.wrapper}>
          <input
            role="input"
            className={[style.input, style.rigth].join(' ')}
            value={value}
            placeholder={placeholder}
            style={{ width, height, fontSize }}
            onChange={(e) => onChange(e.target.value)}
            type={isHide ? 'password': 'text'} />
            { required ? <p role='paragraph-required' className={style.required}>Обязательное</p>: null}
            <p role='paragraph-toggle' onClick={toggle} className={style.toggle}>{textButton}</p>
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
            type={isHide ? 'password': 'text'} />
            { required ? <p role='paragraph-required' className={style.required}>Обязательное</p>: null}
            <p role='paragraph-toggle' onClick={toggle} className={style.toggle}>{textButton}</p>
        </div>
    }
}

