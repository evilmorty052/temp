import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet
} from 'react-router-dom';



const protectedroutes = (props) => {

    const { currentUser } = useAuth()
    const { path } = props
    const location = useLocation()

    return (
        currentUser ? <Outlet/> : <Navigate to={'/login'} />
    )
    
}        
        
export default protectedroutes
