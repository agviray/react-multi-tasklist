import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBackButton } from './styles/BackButton.styled';

const BackButton = () => {
  return (
    <Link to="/">
      <StyledBackButton>Back</StyledBackButton>
    </Link>
  );
};

export default BackButton;
