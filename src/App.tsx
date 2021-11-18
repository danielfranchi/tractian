import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import AddProduct from './pages/AddProduct/AddProduct';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Companies from './pages/Companies/Companies';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';

const App = () => {
  return (
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product/:id/*' element={<Product />} />
          <Route path='users' element={<Users />} />
          <Route path='companies' element={<Companies />} />
          <Route path='add' element={<AddProduct />} />
        </Routes>

      </BrowserRouter>
  )
}

export default App
