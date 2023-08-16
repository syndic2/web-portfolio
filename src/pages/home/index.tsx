import React from 'react';

import Hero from './components/hero';
import TechStack from './components/tech-stack';
import FeaturedProject from './components/featured-project';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProject />
    </>
  );
};

export default Home;
