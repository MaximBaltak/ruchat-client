import { SxProps } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import style from './ConfirmedEmailPage.module.scss'
const containerStyleMaterial: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'column',
  alignItems: 'center',
  rowGap: '49px',
  height: '100%'
}
export const ConfirmedEmailPage = () => {
  return (
    <div className={style.confirmPage}>
        <Container sx={containerStyleMaterial}>
          <p className={style.desc}>Ваша почта подтверждена, теперь вы можете закрыть эту вкладку</p>
        </Container>
    </div>
  )
}
