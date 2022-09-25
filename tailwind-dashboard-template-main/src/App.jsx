import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet
} from 'react-router-dom';

import ProtectedRoutes from './components/protectedroutes';

import { useAuth } from './contexts/AuthContext'

import './css/style.css';
import './index.css'


import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Notfound from './pages/notfound';
import Dashboardprofile from './pages/Dashboardprofile';
import Dashboardsubscribe from './pages/Dashboardsubscribe';
import Home  from './Home'
import Loginpage from './pages/Loginpage'
import Registerpage from './pages/Registerpage'
import Pickagent from './pages/pickagent';
import Packages from './pages/packages';
import Investing from './pages/invest/investing';
// import Whoweare from './pages/whoweare';
import Aboutus from './pages/Aboutus';
import Retirement from './pages/invest/retirement'
import Kids from './pages/invest/kids'
import Smart from './pages/invest/smartpofolio'
import Learn from './pages/explore/learn/learn';
import Explore from './pages/explore/explore';
import Products from './pages/explore/products/products';

function App() {
  const { currentUser } = useAuth()
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/register" element={<Registerpage />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/invest" element={<Investing />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/retirement" element={<Retirement/>} />
        <Route exact path="/smart" element={<Smart />} />
        <Route exact path="/learn" element={<Learn />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/products" element={<Products />} />
        
        {/* <Route element={<ProtectedRoutes/>}>
            <Route path ="/dashboard" element={<Dashboard />} />
            <Route path ="/profile" element={<Dashboardprofile />} />
        </Route> */}
        
        {/* <Route element={currentUser ? <Outlet /> : <Registerpage />}> */}
            <Route path ="/dashboard" element={<Dashboard />} />
            <Route path ="/profile" element={<Dashboardprofile />} />
            <Route path ="/subscribe" element={<Dashboardsubscribe />} />
            <Route path ="/works" element={<Pickagent />} />
        {/* </Route> */}
      
        <Route path="*" element={<Notfound />} />
      
      {/* <ProtectedRoute exact path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route exact path="/profile" element={ProtectedRoute(<Dashboardprofile />)}/>
      <Route exact path="/dashboard" element={ProtectedRoute(<Dashboard />)}/> */}
   </Routes> 
    </>
  
  );
}

export default App;

// function ProtectedRoute(props) {
//   const { currentUser } = useAuth()
//   const { path } = props
//   console.log('path', path)
//   const location = useLocation()
//   console.log('location state', location.state)

//   if (
//     path === '/login' ||
//     path === '/register' ||
//     path === '/forgot-password' ||
//     path === '/reset-password'
//   ) {
//     return currentUser ? (
//       // <Navigate to={location.state?.from ?? '/dashboard'} />
//       <Outlet />
//     ) : (
//       <Route {...props} />
//     )
//   }
//   return currentUser ? (
//     <Route {...props} />
//   ) : (
//     <Navigate
//       to={{
//         pathname: '/login',
//         state: { from: path },
//       }}
//     />
//   )
// }

