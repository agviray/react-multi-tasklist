import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ItemMenuIcon = ({ iconColor }) => {
  return (
    <StyledIcon>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 71 71"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        xmlnsserif="http://www.serif.com/"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: '2',
        }}
      >
        <path
          d="M35.417,2.083c-18.286,0 -33.334,15.048 -33.334,33.334c0,18.286 15.048,33.333 33.334,33.333c18.286,0 33.333,-15.047 33.333,-33.333c-0.019,-18.279 -15.055,-33.314 -33.333,-33.334Zm-0,61.539c-15.473,-0 -28.205,-12.732 -28.205,-28.205c-0,-15.473 12.732,-28.205 28.205,-28.205c15.473,-0 28.205,12.732 28.205,28.205c-0.018,15.466 -12.739,28.187 -28.205,28.205Zm3.846,-28.205c-0,2.11 -1.736,3.846 -3.846,3.846c-2.11,-0 -3.846,-1.736 -3.846,-3.846c-0,-2.11 1.736,-3.846 3.846,-3.846c2.11,-0 3.846,1.736 3.846,3.846Zm14.102,-0c0,2.11 -1.736,3.846 -3.846,3.846c-2.11,-0 -3.846,-1.736 -3.846,-3.846c0,-2.11 1.736,-3.846 3.846,-3.846c2.11,-0 3.846,1.736 3.846,3.846Zm-28.205,-0c0,2.11 -1.736,3.846 -3.846,3.846c-2.11,-0 -3.846,-1.736 -3.846,-3.846c-0,-2.11 1.736,-3.846 3.846,-3.846c2.11,-0 3.846,1.736 3.846,3.846Z"
          style={{
            fill: `${iconColor}`,
            fillRule: 'nonzero',
            stroke: `${iconColor}`,
            strokeWidth: '4.17px',
          }}
        />
      </svg>
    </StyledIcon>
  );
};

export default ItemMenuIcon;
