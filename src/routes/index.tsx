import {createBrowserRouter, Navigate} from 'react-router-dom'
import {isAuth} from "../utils/isAuth";
import {AuthPage} from "../pages/AuthPage/AuthPage";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";
import {ResetPage} from "../pages/ResetPage/ResetPage";
import {ConfirmedEmailPage} from "../pages/ConfirmedEmailPage/ConfirmedEmailPage";
import {ConfirmPage} from "../pages/ConfirmPage/ConfirmPage";
import {ChatPage} from "../pages/ChatPage/ChatPage";
export const routes = createBrowserRouter([
    {
        path: '/auth',
        element: isAuth() ? <Navigate to='/chat' replace/> : <AuthPage/>
    },
    {
        path: '/',
        element: <Navigate to='/auth' replace/>
    },
    {
        path: '/chat',

        element: isAuth() ?  <ChatPage/>: <Navigate to='/auth' replace/>
    },
    {
        path: '/confirm',
        element: <ConfirmPage/>
    },
    {
        path: '/confirmed',
        element:  <ConfirmedEmailPage/>
    },
    {
        path: '/reset',
        element: <ResetPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    },
])
