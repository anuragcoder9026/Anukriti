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
import Profile from './components/Profile.jsx';
import Setting from './components/Setting.jsx';
import OtherCreationInfo from './components/OtherCreationInfo.jsx';
import Category from './components/Category.jsx';
import BookContent from './components/BookContent.jsx';
import { Provider } from 'react-redux';
import AnukritiStore from './store/store.js';
import Publish from './components/Publish.jsx';
import PostQuery from './components/PostQuery.jsx';
const router=createBrowserRouter([
  {
  path:"/",
  element:<App />,
  children:[
  {path:"/Anukriti",element:<Home/>},
  {path:"/Anukriti/post-query/:id",element:<PostQuery/>},
  {path:"/Anukriti/sign",element:<Sign/>},
  {path:"/Anukriti/write/",element:<Write/>},
  {path:"/Anukriti/create",element:<Create/>},
  {path:"/Anukriti/explore",element:<Explore/>},
  {path:"/Anukriti/aboutStory/:id",element:<AboutStory/>},
  {path:"/Anukriti/profile/:id",element:<Profile/>},
  {path:"/Anukriti/setting",element:<Setting/>},
  {path:"/Anukriti/story/:id",element:<OtherCreationInfo/>},
  {path:"/Anukriti/genre/:category",element:<Category/>},
  {path:"/Anukriti/book-content/:id",element:<BookContent/>},
  {path:"/Anukriti/publish",element:<Publish/>},
  ]
  }
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={AnukritiStore}>
    <RouterProvider router={router}/>
    </Provider>
  
)

