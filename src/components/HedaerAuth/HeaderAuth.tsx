import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import style from './HeaderAuth.module.scss'
import {SxProps} from '@mui/system';
import {Tooltip} from '@mui/material';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {toggleForm} from "../../store/slices/authForm/authForm.slice";
import {typeForm} from "../../types/typeForm";

const styleIconMaterial: SxProps = {
    width: 55,
    height: 55,
    color: 'white',
    transition: 'all .2s',
    cursor: 'pointer',
    ':hover': {
        transform: 'scale(0.9)'
    }
}
export const HeaderAuth = () => {
    const dispatch = useAppDispatch()
    return (
        <div className={style.header}>
            <Tooltip title='Зарегистрироваться' placement={"bottom-end"}>
                <PersonAddIcon onClick={() => {
                    dispatch(toggleForm({type: typeForm.Registration}))
                }} sx={styleIconMaterial}/>
            </Tooltip>
            <Tooltip title='Войти' placement={"bottom-end"}>
                <LoginIcon onClick={() => {
                    dispatch(toggleForm({type: typeForm.Login}))
                }} sx={styleIconMaterial}/>
            </Tooltip>
        </div>
    )
}
