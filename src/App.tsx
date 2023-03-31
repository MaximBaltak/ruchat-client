import React from 'react';
import './App.scss';
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes";

function App() {
  return (
    <div className='app'>
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
