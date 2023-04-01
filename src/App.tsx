import React, {useEffect} from 'react';
import './App.scss';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {AuthPage} from "./pages/AuthPage/AuthPage";
import {ConfirmPage} from "./pages/ConfirmPage/ConfirmPage";
import {ConfirmedEmailPage} from "./pages/ConfirmedEmailPage/ConfirmedEmailPage";
import {ResetPage} from "./pages/ResetPage/ResetPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {ChatPage} from "./pages/ChatPage/ChatPage";
import {useAppSelector} from "./hooks/useAppSelector";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {isAuth} from "./utils/isAuth";
import {toggleAuthUser} from "./store/slices/user/user.slice";

function App() {
    const dispatch = useAppDispatch()
    const auth: boolean = useAppSelector(state => state.user.auth)
    useEffect(() => {
        setInterval(() => {
            const currentAuth = isAuth()
            if(currentAuth !== auth) {
               dispatch(toggleAuthUser(currentAuth))
            }
        },1000)
    })
  return (
    <div className='app'>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Navigate to='/auth'/>}/>
              <Route path='/auth' element={auth ? <Navigate to='/chat'/> : <AuthPage/> }/>
              <Route path='/chat' element={auth ? <ChatPage/>: <Navigate to='/auth'/> }/>
              <Route path='/reset' element={<ResetPage/>}/>
              <Route path='/confirm' element={<ConfirmPage/>}/>
              <Route path='/confirmed' element={<ConfirmedEmailPage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
