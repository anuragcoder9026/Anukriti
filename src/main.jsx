import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,createHashRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home.jsx';
import Sign from './components/Sign.jsx';
import Write from './components/write.jsx';
import Create from './components/Create.jsx';
import Explore from './components/Explore.jsx';
import AboutStory from './components/AboutStory.jsx';
const router=createBrowserRouter([
  {
  path:"/",
  element:<App />,
  children:[
  {path:"/Anukriti",element:<Home/>},
  {path:"/Anukriti/sign",element:<Sign/>},
  {path:"/Anukriti/write",element:<Write/>},
  {path:"/Anukriti/create",element:<Create/>},
  {path:"/Anukriti/explore",element:<Explore/>},
  {path:"/Anukriti/aboutStory",element:<AboutStory/>}
  ]
  }
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)