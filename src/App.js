import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import MainSlide from './components/MainSlide';
import Home from './pages/Home';
import Product from './components/Product';

function App() {
  return (
    <>
      <Header />
      <MainSlide />
      <Carousel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId/:variantId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
