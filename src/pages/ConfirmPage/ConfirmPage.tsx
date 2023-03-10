import { SxProps } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { HeaderAuth } from '../../components/HedaerAuth/HeaderAuth'
import { statusInput } from '../../types/statusInput'
import { ButtonSubmit } from '../../ui/Buttons/ButtonSubmit/ButtonSubmit'
import { InputForm } from '../../ui/Inputs/InputForm/InputForm'
import style from './ConfirmPage.module.scss'
const containerStyleMaterial: SxProps = {
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'column',
  alignItems: 'center',
  rowGap: '49px'
}
export const ConfirmPage = () => {
  return (
    <div className={style.confirmPage}>
        <HeaderAuth/>
        <Container sx={containerStyleMaterial}>
          <p className={style.desc}>Введите код из сообщения, который был отправлен на почту mail@mail.ru</p>
          <p className={style.timer}>00:00</p>
          <InputForm
                    onChange={() => { }}
                    status={statusInput.Normal}
                    value={''}
                    placeholder='Введите код' />
          <ButtonSubmit click={() => { }} text='Подтвердить' width='300px' />
        </Container>
    </div>
  )
}
