import NavBar from './components/NavBar';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Write from './pages/Write.jsx';
import Single from './pages/Single.jsx'; 
import Footer from './components/Footer.jsx';
import { Outlet, RouterProvider, Route, createBrowserRouter } from 'react-router-dom';

import './App.css';
const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  );
}
const router = createBrowserRouter ([
  {path: '/', element: <Layout/>, 
    children: [{path : '/', element: <Home/>}],
    children: [{path: '/write', element: <Write/>}],
    children: [{path: '/post/id:', element: <Single/>}],
    
    
},
 {path: '/login', element: <Layout/>,
    children: [{path: '/login', element: <Login/>}],
 },
 {path: '/register', element: <Register/>},
]
);


function App() {
  return (
    <div className="App">
      <div className="AppContainer"> 

      
      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
