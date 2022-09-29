import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/ProductInfo';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
