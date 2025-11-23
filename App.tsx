import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Curriculum } from './components/Curriculum';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Testimonials />
      <Curriculum />
      <Pricing />
    </Layout>
  );
};

export default App;
