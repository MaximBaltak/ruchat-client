import {Container, SxProps} from '@mui/material'
import React, {useState} from 'react'
import {statusInput} from '../../types/statusInput'
import {AvatarButton} from '../../ui/Buttons/AvatarButton/AvatarButton'
import {ButtonSubmit} from '../../ui/Buttons/ButtonSubmit/ButtonSubmit'
import {TextButton} from '../../ui/Buttons/TextButton/TextButton'
import {ErrorText} from '../../ui/ErrorText/ErrorText'
import {InputForm} from '../../ui/Inputs/InputForm/InputForm'
import {PasswordInputForm} from '../../ui/Inputs/PasswordInputForm/PasswordInputForm'
import style from './SignUp.module.scss'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {
    changeEmail,
    changePassword,
    changeUserName,
    registrationThunkRequest
} from "../../store/slices/authForm/authForm.slice";
import {isAuth} from "../../utils/isAuth";
import {useNavigate} from "react-router-dom";

const containerStyleMaterial: SxProps = {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'column',
    alignItems: 'center',
    rowGap: '49px'
}

export const SignUp = () => {
    const [file, setFile] = useState<Blob | ''>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const authState = useAppSelector(state => state.auth)
    const onInputName = (value: string) => {
        dispatch(changeUserName({value}))
    }
    const onInputPassword = (value: string) => {
        dispatch(changePassword({value}))
    }
    const onInputEmail = (value: string) => {
        dispatch(changeEmail({value}))
    }
    const onSelectFile = (file: Blob | '') => {
       setFile(file)
    }
    const submit = () => {
        if (
            authState.inputName.status === statusInput.Rigth &&
            authState.inputPassword.status === statusInput.Rigth &&
            authState.inputEmail.status === statusInput.Rigth
        ) {
            dispatch(registrationThunkRequest(file))
            setFile('')
            navigate('/chat')
        }
    }
    return (
        <Container sx={containerStyleMaterial}>
            <p className={style.title}>Регистрация</p>
            <div className={style.form}>
                <AvatarButton onSelect={onSelectFile}/>
                <InputForm
                    onChange={onInputName}
                    status={authState.inputName.status}
                    value={authState.inputName.value}
                    placeholder='Имя'
                    required={true}/>
                <PasswordInputForm
                    onChange={onInputPassword}
                    status={authState.inputPassword.status}
                    value={authState.inputPassword.value}
                    placeholder='Пароль'
                    required={true}
                />
                <InputForm
                    onChange={onInputEmail}
                    status={authState.inputEmail.status}
                    value={authState.inputEmail.value}
                    placeholder='email'
                    required={true}/>
                <ErrorText text='ошибка'/>
            </div>
            <ButtonSubmit click={submit} text='Зарегистрироваться' width='300px'/>
            <TextButton click={() => {
            }} text="Востановить доступ" color='white' fontSize='20px'/>
        </Container>
    )
}
