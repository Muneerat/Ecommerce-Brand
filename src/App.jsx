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
import { useState } from 'react';
import Footer from './Components/Footer';

function App() {
  // const [loading, setLoading] = useState(false);
 const [cart, setCart] = useState([]);

 const addToCart = (product) => {
   let existingProduct = cart.find((product)  => product.id === product.id);

   if(existingProduct) {
    let index = cart.findIndex((product) => product.id === product.id);
    let newCart = [...cart];

    newCart[index].qty = existingProduct.qty + 1;
    setCart(newCart);
   } else {
     product.qty = 1;
     setCart((prev) => [...prev, product])
   }
 }
 
  return (
    <AppContext.Provider
     value={{ 
       cart,
       setCart,
       addToCart: addToCart,
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
       <Footer />
      </Router>
    
    </AppContext.Provider>
  )
}

export default App
