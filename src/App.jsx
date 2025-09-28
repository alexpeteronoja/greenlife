import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/ScrollToTop';

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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
