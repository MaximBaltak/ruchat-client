import React from 'react';
import './App.scss';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import {isAuth} from "./utils/isAuth";
import {AuthPage} from "./pages/AuthPage/AuthPage";
import {ConfirmPage} from "./pages/ConfirmPage/ConfirmPage";
import {ConfirmedEmailPage} from "./pages/ConfirmedEmailPage/ConfirmedEmailPage";
import {ResetPage} from "./pages/ResetPage/ResetPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {ChatPage} from "./pages/ChatPage/ChatPage";

function App() {
  return (
    <div className='app'>
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
