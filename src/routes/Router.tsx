import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductInfo from '../pages/ProductInfo';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductInfo />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
