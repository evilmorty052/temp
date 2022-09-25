import React from 'react'
import { NavLink as Link, useLocation } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
// import './Navlink.css'

export default function Navlink({ to, name, ...rest }) {
  const location = useLocation()

  const isActive = location.pathname === to

  return (
    <Link to={to}>
      <li
        // variant={isActive ? 'outline' : 'ghost'}
        // colorScheme={isActive ? 'pink' : ''}
        {...rest}
      className='button text-xl text-white  font-poppins font-bold flex gap-4 mx-4'>
        {name}
      </li>
    </Link>
  )
}
