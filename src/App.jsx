// import { useState } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { AppContext } from './Contexts/AppContent';
import Logo from './assets/logo.png';
import FormInput from './Components/Form/FormInput';
function App() {

  return (
    <AppContext.Provider
     value={{ 

      }}>
      <Router>
        <div className='w-full max-w-screen-2xl items-center mx-auto p-4'>
        <div className="flex justify-between p-6">
        <div className="">
         <img src={Logo} alt='Logo' />
        </div>
        <div className=' w-3/6'>
        <form className='flex items-center '>
          {/* <input type="text" placeholder="Search for anything..." className='p-3 border-3 border-[#0D6EFD]'/> */}
          <FormInput 
           placeholder="Search for anything..."
           className=' rounded-l-lg block w-full placeholder-red-400'
           maxLength={255}
           value='search'
           />
          <select className='py-2.5 px-4 bg-white  outline outline-[#0D6EFD]'>
            <option selected value="1">All category</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
         <button className='bg-[#0D6EFD] text-white rounded-r-lg px-5 py-2.5'>Search</button>
        </form>
        
        </div>
        <div>
          <div>
            profile
          </div>
        </div>
        </div>

          <ul className='max-w- mx-auto flex items-center gap-x'>
          <li>
            <Link to='/' title='Home' className='py-4 block px-3 hover:underline transition ease-in-out duration-200'>Home</Link>
          </li>
          <li>
            <Link to='/' title='Home' className='py-4 block px-3 hover:underline transition ease-in-out duration-200'>Home</Link>
          </li>
          <li>
            <Link to='/' title='Home' className='py-4 block px-3 hover:underline transition ease-in-out duration-200'>Home</Link>
          </li>
          <li>
            <Link to='/' title='Home' className='py-4 block px-3 hover:underline transition ease-in-out duration-200'>Home</Link>
          </li>
       
         </ul> 
         <div>

         </div>
        </div>
      </Router>
    
    </AppContext.Provider>
  )
}

export default App
