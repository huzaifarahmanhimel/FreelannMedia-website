
import './App.css';

import { createBrowserRouter, Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';
import Hero from './Components/hero';



const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Hero /> },
    ]
  }]
);


function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;