import React from 'react'
import { HeaderAuth } from '../../components/HedaerAuth/HeaderAuth'
import { SignUp } from '../../components/SignUp/SignUp'
import style from './AuthPage.module.scss'
export const AuthPage = () => {
  return (
    <div className={style.pageAuth}>
        <HeaderAuth/>
        <SignUp/>
    </div>
  )
}
