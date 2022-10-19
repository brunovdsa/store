import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Category from '../pages/Category';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/products/category/:id' element={<Category />} />
      <Route path='/cart' element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
