import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './pages/Home';
import List from './pages/List';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/list/:title" element={<List />} />
      </Route>
    </Routes>
  );
};

export default App;
