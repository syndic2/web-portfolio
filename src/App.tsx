import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

const Home = React.lazy(() => import('./pages/home'));
const Project = React.lazy(() => import('./pages/project'));
const Contact = React.lazy(() => import('./pages/contact'));

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/projects'
            element={<Project />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
