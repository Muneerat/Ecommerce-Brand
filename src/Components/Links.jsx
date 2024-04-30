import React from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from "../Contexts/AppContent";
import { useContext } from 'react';

export default function Links({
    to= '',
    className= '',
    text,
 ...props
}) {
  const {scrollToTop} = useContext(AppContext);
  return (
   
    <Link 
       onClick={scrollToTop}
       to={to}
       className={
        `before:[''] items-center before:w-0 h-4 before:rounded-md before:absolute before:inset-y-7 m-2 relative before:h-1 before:bg-primary before:right-0 hover:text-primary hover:before:w-full hover:before:left-0 before:transition-all before:ease-in-out before:duration-400`}>
        {text}
    </Link>
  )
}


