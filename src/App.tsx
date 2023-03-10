import React from 'react';
import './App.scss';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { ChatPage } from './pages/ChatPage/ChatPage';

function App() {
  return (
    <div className='app'>
      {/*<ChatPage/>*/}
      <AuthPage/>
    </div>
  );
}

export default App;
