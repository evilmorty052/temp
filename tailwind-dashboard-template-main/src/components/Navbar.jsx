import { useState } from "react";
import Popover from '../partials/popover'
import Popover2 from '../partials/popover2'
import { NavLink as Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";


import { close, logo, menu } from "../assets";
import Ml from '../assets/logo1.png'
import { navLinks } from "../constants";
import Navlink from './Navlink'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { logout, currentUser } = useAuth()

  return (
    <nav className="w-full flex py-2 justify-between items-center navbar">
      <img src={Ml} alt="medic420" className="w-[100px] h-[70px]" />

      <ul className="list-none md:flex hidden justify-end items-center flex-1 ">
        {/* {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
           
          </li>
          
        ))} */}
        <Navlink to='/' name='Home'/>
        <Popover/>
        {/* <Navlink to='/learn' name='Learn'/> */}
        {/* <Navlink to='/aboutus' name='About Us'/> */}
        <a href="https://products-31e31.web.app" target='blank' className="font-poppins text-xl font-bold text-white">SHOP CBD</a>
        {/* <Navlink to='https://products-31e31.web.app' name='Packages'/> */}
        <Popover2/>
         {!currentUser && <Navlink to='/login' name='Login' />}
        {!currentUser && <Navlink to='/register' name='Register' />}
        {currentUser && <Navlink to='/profile' name='profile' />}
        {currentUser && (
  <Navlink
    to='/logout'
    name='Logout'
    onClick={async e => {
      e.preventDefault()
      await logout()
    }}
  />)}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
       <Link to={'/login'}><FaUser className="mr-4 text-white"/></Link> 
        {!currentUser && <Link to={'/register'}><button className="mr-4 bg-indigo-400 px-4 rounded-full text-white font-poppins text-sm py-2">Sign Up</button></Link>}
        {!currentUser && ""}
        
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 left-0  mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          
          <ul className="list-none flex justify-end items-start flex-1 flex-col -z-50  gap-8">
            {/* {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))} */}
          <Navlink to='/' name='Home'/>
          {/* <Navlink to='/dashboard' name='Dashboard'/> */}
          {/* <Navlink to='/https://products-31e31.web.app' name='Packages'/> */}
          <a href="https://products-31e31.web.app" target='blank' className="font-poppins text-xl font-bold text-white">SHOP CBD</a>
          {/* <Navlink to='/aboutus' name='About Us'/> */}
         {!currentUser && <Navlink to='/login' name='Login' />}
        {!currentUser && <Navlink to='/register' name='Register' />}
        {currentUser && <Navlink to='/profile' name='Profile' />}
        <Popover/>
        <Popover2/>
        {currentUser && (
  <Navlink
    to='/logout'
    name='Logout'
    onClick={async e => {
      e.preventDefault()
      await logout()
    }}
  />)}
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;