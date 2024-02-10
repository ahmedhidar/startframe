import './App.css';
import Home from './Component/Home/Home';
import Layout from './Component/Layout/Layout';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound';


export default function App() {
  let routes = createBrowserRouter([{
    path:"", element:<Layout/>, children:[
      {index:true, element:<Home/>},
      {path:"about", element:<About/>},
      {path:"portfolio", element:<Portfolio/>},
      {path:"contact", element:<Contact/>},


      {path:"*", element:<NotFound/>}
  ]
  }])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

