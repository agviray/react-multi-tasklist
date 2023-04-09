import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContent from './HeaderContent';
import AllLists from './pages/AllLists';
import GlobalStyles from './styles/GlobalStyles';
import { StyledMainContent } from './styles/Layout.styled';

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <header>
        <HeaderContent />
      </header>
      <main>
        <StyledMainContent>
          <AllLists />
          <Outlet />
        </StyledMainContent>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
