import {createBrowserRouter, Navigate} from 'react-router-dom'
import {useAuth} from "../hooks/useAuth";
import {AuthPage} from "../pages/AuthPage/AuthPage";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";
import {ResetPage} from "../pages/ResetPage/ResetPage";
import {ConfirmedEmailPage} from "../pages/ConfirmedEmailPage/ConfirmedEmailPage";
import {ConfirmPage} from "../pages/ConfirmPage/ConfirmPage";
export const routes = createBrowserRouter([
    {
        path: '/auth',
        // eslint-disable-next-line react-hooks/rules-of-hooks
        element: useAuth() ? <Navigate to='/chat' replace/> : <AuthPage/>
    },
    {
        path: '/',
        element: <Navigate to='/auth' replace/>
    },
    {
        path: '/chat',
        // eslint-disable-next-line react-hooks/rules-of-hooks
        element: useAuth() ? <Navigate to='/chat' replace/> : <AuthPage/>
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
