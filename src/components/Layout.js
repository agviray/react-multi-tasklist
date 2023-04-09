import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContent from './HeaderContent';
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
          <Outlet />
        </StyledMainContent>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
