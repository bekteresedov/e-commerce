import React from 'react'
import { AiOutlineHome,AiFillHeart } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className='py-2'>
       <ul className='fs-3'>
         <Link to="/"><AiOutlineHome className='icon'/></Link>
         <Link to={localStorage.getItem("username")?"/profile":null}><MdAccountCircle className='icon'/></Link>
         <Link to="/login"><BiLogIn className='icon'/></Link>
       </ul>
   </footer>
  )
}

export default Footer