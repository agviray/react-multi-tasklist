import React, { useState } from 'react';
import { connect } from 'react-redux';
import { displayModal, deleteList } from '../../actions';
import styled from 'styled-components';

const StyledIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const DeleteIcon = ({ listId, listTitle, displayModal, deleteList }) => {
  const [fillColor, setFillColor] = useState('#b3b3b3');

  const deleteSelectedList = () => {
    deleteList(listId);
  };

  const handleClick = (e) => {
    displayModal({
      modalHeading: 'Delete List',
      modalBody: `Are you sure you want to delete ${
        listTitle === '' ? 'this' : `the "${listTitle}"`
      } list? This action cannot be undone.`,
      modalButton: {
        text: 'Delete List',
        callback: () => deleteSelectedList(),
      },
      modalHasCancelOption: true,
    });
    // - The following line prevents click event from bubbling to DeleteIcon's
    //   parent container (Link).
    e.preventDefault();
  };

  return (
    <StyledIcon
      onMouseEnter={() => setFillColor('#f54957')}
      onMouseLeave={() => setFillColor('#e7e7e7')}
      onClick={handleClick}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 275 275"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        xmlnsserif="http://www.serif.com/"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterLimit: '2',
        }}
      >
        <path
          d="M266.861,46.964c10.737,-10.737 10.737,-28.174 0,-38.911c-10.737,-10.737 -28.174,-10.737 -38.911,-0l-90.45,90.536l-90.536,-90.45c-10.737,-10.737 -28.174,-10.737 -38.911,-0c-10.737,10.737 -10.737,28.174 -0,38.911l90.536,90.45l-90.45,90.536c-10.737,10.737 -10.737,28.174 -0,38.911c10.737,10.737 28.174,10.737 38.911,0l90.45,-90.536l90.536,90.45c10.737,10.737 28.174,10.737 38.911,0c10.737,-10.737 10.737,-28.174 0,-38.911l-90.536,-90.45l90.45,-90.536Z"
          style={{ fill: `${fillColor}`, fillRule: 'nonzero' }}
        />
      </svg>
    </StyledIcon>
  );
};

export default connect(null, {
  displayModal: displayModal,
  deleteList: deleteList,
})(DeleteIcon);
