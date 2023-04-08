import React, { useState, useEffect } from 'react';
import { StyledHeader } from './styles/StyledHeader.styled';

const Header = () => {
  const [scrollYPos, setScrollYPos] = useState(0);
  const [isTransitionApplied, setIsTransitionApplied] = useState(false);
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
    <StyledHeader isTransitionApplied={isTransitionApplied}>
      <h1>Multi-Tasklist</h1>
    </StyledHeader>
  );
};

export default Header;
