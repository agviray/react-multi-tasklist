import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContent from './HeaderContent';
import Modal from './Modal';
import GlobalStyles from './styles/GlobalStyles';
import GlobalFonts from './styles/GlobalFonts';
import { StyledMainContent } from './styles/Layout.styled';

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
      <header>
        <HeaderContent />
      </header>
      <main>
        <StyledMainContent>
          <Outlet />
        </StyledMainContent>
      </main>
      <footer></footer>
      <Modal />
    </>
  );
};

export default Layout;
