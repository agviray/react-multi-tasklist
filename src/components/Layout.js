import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import AllLists from './pages/AllLists';
import GlobalStyles from './styles/GlobalStyles';

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <AllLists />
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
