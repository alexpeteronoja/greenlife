import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermOfUse from './pages/TermOfUse';
import CookiePolicy from './pages/CookiePolicy';
import ProductItem from './pages/ProductItem';

function App() {
  return (
    <>
      <div>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogpost" element={<BlogPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/term-of-use" element={<TermOfUse />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/product/:id" element={<ProductItem />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
