import { Container, SxProps } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { statusInput } from '../../types/statusInput'
import { AvatarButton } from '../../ui/Buttons/AvatarButton/AvatarButton'
import { ButtonSubmit } from '../../ui/Buttons/ButtonSubmit/ButtonSubmit'
import { TextButton } from '../../ui/Buttons/TextButton/TextButton'
import { ErrorText } from '../../ui/ErrorText/ErrorText'
import { InputForm } from '../../ui/Inputs/InputForm/InputForm'
import { PasswordInputForm } from '../../ui/Inputs/PasswordInputForm/PasswordInputForm'
import style from './SignUp.module.scss'
const containerStyleMaterial: SxProps = {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'column',
    alignItems: 'center',
    rowGap: '49px'
}

export const SignUp = () => {
    return (
        <Container sx={containerStyleMaterial}>
            <p className={style.title}>Регистрация</p>
            <div className={style.form}>
                <AvatarButton />
                <InputForm
                    onChange={() => { }}
                    status={statusInput.Rigth}
                    value={''}
                    placeholder='Имя'
                    required={true} />
                <PasswordInputForm
                    onChange={() => { }}
                    status={statusInput.Error}
                    value={'ццццццц'}
                    placeholder='Пароль'
                    required={true}
                />
                <InputForm
                    onChange={() => { }}
                    status={statusInput.Normal}
                    value={''}
                    placeholder='email'
                    required={true} />
                <ErrorText text='ошибка' />
            </div>
            <ButtonSubmit click={() => { }} text='Зарегистрироваться' width='300px' />
            <TextButton click={() => { }} text="Востановить доступ" color='white' fontSize='20px' />
        </Container>
    )
}
