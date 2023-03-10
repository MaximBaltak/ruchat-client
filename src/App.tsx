import React from 'react';
import './App.scss';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { ConfirmedEmailPage } from './pages/ConfirmedEmailPage/ConfirmedEmailPage';
import { ConfirmPage } from './pages/ConfirmPage/ConfirmPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ResetPage } from './pages/ResetPage/ResetPage';

function App() {
  return (
    <div className='app'>
      {/*<ChatPage/>*/}
      {/*<AuthPage/> */}
      {/*<ResetPage/>*/}
      {/*<ConfirmPage/> */}
      {/*<ConfirmedEmailPage/> */}
      <NotFoundPage/>
    </div>
  );
}

export default App;
