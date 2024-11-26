import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Banner from './Components/Banner/Banner.jsx';
import Header from './Header/Header.jsx';
import About from './Components/About/About.jsx';
import Skill from './Components/Skills/Skill.jsx';
import Footer from './Footer/Footer.jsx';

import Project from './Components/Project/Project.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Banner />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: '/skill',
    element: (
      <>
        <Header />
        <Skill />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Header />
        <Footer />
      </>
    ),
  },
  {
    path: '/project',
    element: (
      <>
        <Header />
        <Project />
      </>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
