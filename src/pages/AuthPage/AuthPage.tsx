import React from 'react'
import {HeaderAuth} from '../../components/HedaerAuth/HeaderAuth'
import style from './AuthPage.module.scss'
import {typeForm} from "../../types/typeForm";
import {useAppSelector} from "../../hooks/useAppSelector";
import {SignUp} from "../../components/SignUp/SignUp";
import {SignIn} from "../../components/SignIn/SignIn";

export const AuthPage = () => {
    const type: typeForm = useAppSelector(state => state.auth.typeForm)
  return (
    <div className={style.pageAuth}>
        <HeaderAuth/>
        {
            type === typeForm.Registration ? <SignUp/>: <SignIn/>
        }
    </div>
  )
}
