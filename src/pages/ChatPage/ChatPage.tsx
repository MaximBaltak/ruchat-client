import Container from '@mui/material/Container'
import React, { useEffect } from 'react'
import { Chat } from '../../components/Chat/Chat'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { wsConnect } from '../../store/slices/webSocket/webSocket.slice'

export const ChatPage = () => {
    const dispatch = useAppDispatch()
    useEffect( () => {
        dispatch(wsConnect())
    },[])
    return (
        <Container maxWidth='lg'>
            <Chat/>
        </Container>
    )
}
