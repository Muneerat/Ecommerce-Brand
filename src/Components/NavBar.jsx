import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import FormInput from '../Components/Form/FormInput';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import Links from './Links';

export default function NavBar() {
    const [openMenu , setOpenMenu] = useState(true)
  return (
   
    <div className='w-full max-w-screen-2xl items-center mx-auto p-2 border-b-2 border-slate-200'>
    <div className="flex justify-between p-6">
    <div className="order-2 md:order-none">
    <Link to="/" >
     <img src={Logo} alt='Logo' />
    </Link>
   
    </div>
    <div className='order-1 md:order-none flex items-center'>
        <ul className={`max-w- mx-auto items-center gap-x  md:flex   ${ !openMenu ? 'bg-primary flex-col w-screen h-screen absolute top-10 left-0 z-10     ' : 'hidden'}`}>
      <li>
        <Links to='/' text='Home'/>
      </li>
      <li>
      <Links to='/contact' text='Contact'/>
      </li>
      <li>
      <Links to='/about' text='About'/>
      </li>
      <li>
      <Links to='/signup' text='SignUp'/>
      </li>
        </ul> 
     <button className='flex md:hidden' onClick={ () => setOpenMenu(!openMenu)}>
    { openMenu ?  <GiHamburgerMenu size={30} /> :  <HiX size={30} /> }
       {/* <GiHamburgerMenu size={30} />  */}
       {/* <HiX /> */}
     </button>
    </div>
    <div className='flex items-center order-3'>
      <form className=' items-center hidden md:flex '>
      <FormInput 
       placeholder="What are you looking for?"
       className=' rounded-l-lg block w-full placeholder-grey-400'
       maxLength={255}
       afterContent={<IoSearch />}
       />
      </form>
      <span className='px-5'><MdOutlineFavoriteBorder size={25} /></span>   
      <GrCart size={25}  />
    </div>
    </div>
    <form className='items-center flex md:hidden w-full '>
      <FormInput 
       placeholder="What are you looking for?"
       className=' rounded-l-lg block w-full placeholder-grey-400'
       maxLength={255}
       afterContent={<IoSearch />}
       />
      </form>
    </div>
  )
}
