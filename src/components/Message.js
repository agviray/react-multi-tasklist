import React from 'react';
import { StyledMessage } from './styles/Message.styled';

const Message = ({ text }) => {
  return <StyledMessage>{text}</StyledMessage>;
};

export default Message;
