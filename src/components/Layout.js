import React from 'react';
import { Outlet } from 'react-router-dom';
import AllLists from './pages/AllLists';

const Layout = () => {
  return (
    <>
      <header>
        <h1>MultiTasklist</h1>
      </header>
      <main>
        <AllLists />
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
