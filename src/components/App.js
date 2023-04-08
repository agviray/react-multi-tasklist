import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import List from './pages/List';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/list/:title" element={<List />} />
      </Route>
    </Routes>
  );
};

export default App;
