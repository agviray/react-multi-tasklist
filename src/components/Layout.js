import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadSavedLists } from '../actions';
import HeaderContent from './HeaderContent';
import GlobalStyles from './styles/GlobalStyles';
import { StyledMainContent } from './styles/Layout.styled';

const Layout = ({ loadSavedLists }) => {
  // - Initial load of saved info, if any exists.
  useEffect(() => {
    const storedLists = JSON.parse(
      localStorage.getItem('storedMultiTasklistState')
    );
    if (storedLists) {
      loadSavedLists(storedLists);
    }
  }, []);

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

export default connect(null, {
  loadSavedLists: loadSavedLists,
})(Layout);
