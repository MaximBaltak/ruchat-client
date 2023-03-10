import { Container, SxProps } from '@mui/material'
import { statusInput } from '../../types/statusInput'
import { AvatarButton } from '../../ui/Buttons/AvatarButton/AvatarButton'
import { ButtonSubmit } from '../../ui/Buttons/ButtonSubmit/ButtonSubmit'
import { TextButton } from '../../ui/Buttons/TextButton/TextButton'
import { ErrorText } from '../../ui/ErrorText/ErrorText'
import { InputForm } from '../../ui/Inputs/InputForm/InputForm'
import { PasswordInputForm } from '../../ui/Inputs/PasswordInputForm/PasswordInputForm'
import style from './SignIn.module.scss'
const containerStyleMaterial: SxProps = {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'column',
    alignItems: 'center',
    rowGap: '49px'
}

export const SignIn = () => {
    return (
        <Container sx={containerStyleMaterial}>
            <p className={style.title}>Вход</p>
            <div className={style.form}>
                <InputForm
                    onChange={() => { }}
                    status={statusInput.Normal}
                    value={''}
                    placeholder='Почта' />
                <PasswordInputForm
                    onChange={() => { }}
                    status={statusInput.Normal}
                    value={''}
                    placeholder='Пароль'
                />
                <ErrorText text='ошибка' />
                <div className={style.background}></div>
            </div>
            <ButtonSubmit click={() => { }} text='Войти' width='300px' />
            <TextButton click={() => { }} text="Востановить доступ" color='white' fontSize='20px' />
        </Container>
    )
}
    