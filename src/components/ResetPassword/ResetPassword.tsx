import { Container, SxProps } from '@mui/material'
import { statusInput } from '../../types/statusInput'
import { ButtonSubmit } from '../../ui/Buttons/ButtonSubmit/ButtonSubmit'
import { ErrorText } from '../../ui/ErrorText/ErrorText'
import { PasswordInputForm } from '../../ui/Inputs/PasswordInputForm/PasswordInputForm'
import style from './ResetPassword.module.scss'
const containerStyleMaterial: SxProps = {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'column',
    alignItems: 'center',
    rowGap: '49px'
}

export const ResetPassword = () => {
    return (
        <Container sx={containerStyleMaterial}>
            <p className={style.title}>Сброс пароля</p>
            <div className={style.form}>
                <PasswordInputForm
                    key='new-password'
                    onChange={() => { }}
                    status={statusInput.Normal}
                    value={''}
                    placeholder='Новый пароль'
                />
                <PasswordInputForm
                    key='confirm-password'
                    onChange={() => { }}
                    status={statusInput.Normal}
                    value={''}
                    placeholder='Подтверждение пароля'
                />
                <ErrorText text='ошибка' />
            </div>
            <ButtonSubmit click={() => { }} text='Подтвердить' width='300px' />
        </Container>
    )
}
