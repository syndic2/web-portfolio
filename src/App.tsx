import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

const Home = React.lazy(() => import('./pages/home'));
const Project = React.lazy(() => import('./pages/project'));
const Contact = React.lazy(() => import('./pages/contact'));

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/projects'
          element={
            <Suspense>
              <Project />
            </Suspense>
          }
        />
        <Route
          path='/contact'
          element={
            <Suspense>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
