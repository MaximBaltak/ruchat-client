import React from 'react'
import { HeaderAuth } from '../../components/HedaerAuth/HeaderAuth'
import { ResetPassword } from '../../components/ResetPassword/ResetPassword'
import style from './ResetPage.module.scss'
export const ResetPage = () => {
  return (
    <div className={style.resetPage}>
        <HeaderAuth/>
        <ResetPassword/>
    </div>
  )
}
