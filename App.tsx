import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Curriculum } from './components/Curriculum';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { VSLPage } from './components/VSLPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => (
  <>
    <Hero />
    <About />
    <Testimonials />
    <Curriculum />
    <Pricing />
  </>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vsl" element={<VSLPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;