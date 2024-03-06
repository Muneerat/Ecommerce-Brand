// import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import { AppContext } from './Contexts/AppContent';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import axios from 'axios';
import SingleProduct from './Pages/SingleProduct';

function App() {
  
  // fetch('https://fakestoreapi.com/products/categories')
  // .then((res) => res.json())
  // .then((data) => console.log(data))

  // axios.get(`https://fakestoreapi.com/products/categories`)
  // .then((res => console.log(res.json())))
  // .catch((err) => {
  //      console.log(err)

  // })
  // fetch('https://fakestoreapi.com/products?limit=5')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
 
  return (
    <AppContext.Provider
     value={{ 

      }}>
      <Router>
      <NavBar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path=':id' element={<SingleProduct/>} />
       </Routes>
      </Router>
    
    </AppContext.Provider>
  )
}

export default App
