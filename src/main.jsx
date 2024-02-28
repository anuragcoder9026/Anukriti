import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home.jsx';
import Sign from './components/Sign.jsx';
import Write from './components/write.jsx';
import Create from './components/Create.jsx';
const router=createBrowserRouter([
  {
  path:"/",
  element:<App />,
  children:[
  {path:"/",element:<Home/>},
  {path:"/sign",element:<Sign/>},
  {path:"/write",element:<Write/>},
  {path:"/create",element:<Create/>}
  ]
  }
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
