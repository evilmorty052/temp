import React from "react";
import {NavLink as Link} from "react-router-dom";


const Button = ({ styles }) => (
    <Link to='/register'> <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none  ${styles}`}>
      Buy Now
    </button></Link >
  );
  
  export default Button;