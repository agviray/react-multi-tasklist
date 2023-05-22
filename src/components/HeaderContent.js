import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledHeaderContent } from './styles/HeaderContent.styled';
import ListPageHeaderContent from './ListPageHeaderContent';

const HeaderContent = () => {
  const [scrollYPos, setScrollYPos] = useState(0);
  const [isTransitionApplied, setIsTransitionApplied] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleVerticalScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollYPos(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleVerticalScroll);

    return () => {
      window.removeEventListener('scroll', handleVerticalScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollYPos > 0) {
      if (isTransitionApplied) {
        return;
      }
      setIsTransitionApplied(true);
    }

    if (scrollYPos === 0) {
      if (isTransitionApplied) {
        setIsTransitionApplied(false);
      }
    }
  }, [scrollYPos]);

  return (
    <StyledHeaderContent isTransitionApplied={isTransitionApplied}>
      {location.pathname === '/' ? (
        <h1>MULTI-TASKLIST</h1>
      ) : (
        <ListPageHeaderContent />
      )}
    </StyledHeaderContent>
  );
};

export default HeaderContent;
