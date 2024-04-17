import React, { useContext, useState } from 'react'
import Logo from '../assets/logo.png';
import FormSearch from '../Components/Form/FormSearch';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import Links from './Links';
import { AppContext } from '../Contexts/AppContent';

export default function NavBar({item}) {
   
    const [openMenu , setOpenMenu] = useState(true)
    const {darkMode, toggleTheme} = useContext(AppContext)
    const {cart} = useContext(AppContext)
  return (
   
    <div className={`${darkMode ? 'bg-red-400 w-full max-w-screen-2xl items-center mx-auto p-2 border-b-2 border-slate-200' : 'w-full max-w-screen-2xl items-center mx-auto p-2 border-b-2 border-slate-200'}`}>
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
      <Links to='/allProducts' text='Products'/>
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
     <button onClick={toggleTheme}
     >
      {darkMode ? "darkMode" : "lightmode"}
     </button>
    </div>
    <div className='flex items-center order-3'>
      <form className=' items-center hidden md:flex '>
      <FormSearch 
       placeholder="What are you looking for?"
       className=' rounded-l-lg block w-full placeholder-grey-400'
       maxLength={255}
       afterContent={<IoSearch />}
       />
      </form>
      <span className='px-5'><MdOutlineFavoriteBorder size={25} /></span> 
      <div>
      <Link to="/cart" >
      <span>{cart.length}</span>
      <GrCart size={25}  />
      </Link>
     
      </div>  
    </div>
    </div>
    <form className='items-center flex md:hidden w-full '>
      <FormSearch 
       placeholder="What are you looking for?"
       className=' rounded-l-lg block w-full placeholder-grey-400'
       maxLength={255}
       afterContent={<IoSearch />}
       />
      </form>
    </div>
  )
}
