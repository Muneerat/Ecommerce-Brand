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
import { MdLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

export default function NavBar({item}) {
   
    const [openMenu , setOpenMenu] = useState(true)
    const {darkMode, toggleTheme} = useContext(AppContext)
    const {cart,totalItems,scrollToTop} = useContext(AppContext)
  return (
   
    <div className={`w-full sticky top-0 left-0 z-30 bg-white dark:bg-slate-950 dark:text-white  items-center mx-auto p-2 border-b-2 border-slate-200`}>
    <div className="flex justify-between p-5 max-w-screen-2xl items-center mx-auto">
    <div className="order-2 md:order-none">
    <Link to="/"   onClick={scrollToTop}>
     <img src={Logo} alt='Logo' />
    </Link>
   
    </div>
    <div className='order-1 md:order-none flex items-center'>
        <ul className={`max-w- mx-auto items-center gap-x  md:flex   ${ !openMenu ? 'bg-white text-2xl py-4 flex-col w-screen h-screen absolute top-[6.5rem] left-0 z-10 transition-all duration-700 ease-in-out    ' : 'hidden'}`}>
      <li>
        <Links to='/' text='Home'/>
      </li>
      <li>
      <Links to='/about' text='About'/>
      </li>
      <li>
      <Links to='products/allProducts' text='Products'/>
      </li>
      <li>
      <Links to='/signup' text='SignUp'/>
      </li>
      
        </ul> 
     <button className='flex md:hidden' onClick={ () => setOpenMenu(!openMenu)}>
    { openMenu ?  <GiHamburgerMenu size={30} /> :  <HiX size={30} /> }
     </button>
    </div>
    <div className='flex items-center order-3'>
      {/* <form className=' items-center hidden md:flex '>
      <FormSearch 
       placeholder="What are you looking for?"
       className=' rounded-l-lg block w-full placeholder-grey-400'
       maxLength={255}
       afterContent={<IoSearch />}
       />
      </form> */}
      <button onClick={toggleTheme}
     >
      {darkMode ?  <MdLightMode size={25} className=' text-white' /> : <IoMoonOutline size={25} />}
     </button>
      <span className='px-5'><MdOutlineFavoriteBorder size={25} /></span> 
      <div>
      <Link to="/cart" >
      {cart.length > 0 ? <span className=' absolute top-7 right- bg-red-600 rounded-full text-white h-5 w-5  text-center text-base'>{totalItems}</span> : ""}
      <GrCart size={26}  />
      </Link>
     
      </div>  
    </div>
    </div>
    {/* <form className='items-center flex md:hidden w-full '>
      <FormSearch 
       placeholder="What are you looking for?"
       className=' rounded-l-lg block w-full placeholder-grey-400'
       maxLength={255}
       afterContent={<IoSearch />}
       />
      </form> */}
    </div>
  )
}
