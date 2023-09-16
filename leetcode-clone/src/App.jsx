import { useState } from 'react'
import Navbar from './components/Navbar';
import DeveloperPage from './pages/developer';
import ExplorePage from './pages/explore';
import MainPage from './pages/Landing';
import PremiumPage from './pages/premium';
import ProductPage from './pages/product';
import SignInPage from './pages/signIn';
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
function App() {
 

    
  return(<>hbjhjhjjhbkhbk
  

   <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/signIn' element={<SignInPage/>}/>
          <Route path='/explore' element={<ExplorePage/>}/>
          <Route path='/premium' element={<PremiumPage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/eeveloper' element={<DeveloperPage/>}/>
          


        </Routes>
      </Router>
  <Navbar/>
  
  
  
  </>)
}

export default App
