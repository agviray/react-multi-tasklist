import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.span`
  display: inline-block;
  width: 17px;
  height: 17px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const TrashcanEmpty = ({ iconColor }) => {
  return (
    <StyledIcon>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 67 77"
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
          d="M24.439,0l17.964,0c1.805,0 3.461,1.015 4.267,2.641l1.074,2.133l14.323,0c2.641,0 4.775,2.134 4.775,4.775c-0,2.641 -2.134,4.774 -4.775,4.774l-57.293,0c-2.64,0 -4.774,-2.133 -4.774,-4.774c-0,-2.641 2.134,-4.775 4.774,-4.775l14.324,0l1.074,-2.133c0.806,-1.626 2.462,-2.641 4.267,-2.641Zm-19.665,19.098l57.293,-0l0,47.744c0,5.266 -4.282,9.548 -9.549,9.548l-38.195,0c-5.267,0 -9.549,-4.282 -9.549,-9.548l0,-47.744Zm28.647,9.548c-0.955,0 -1.865,0.373 -2.537,1.045l-11.936,11.936c-1.402,1.402 -1.402,3.67 0,5.058c1.403,1.387 3.671,1.402 5.058,-0l5.819,-5.819l0,20.008c0,1.984 1.596,3.58 3.581,3.58c1.984,0 3.581,-1.596 3.581,-3.58l-0,-20.008l5.818,5.819c1.403,1.402 3.671,1.402 5.058,-0c1.388,-1.403 1.403,-3.671 0,-5.058l-11.936,-11.936c-0.671,-0.672 -1.581,-1.045 -2.536,-1.045l0.03,0Z"
          style={{
            fill: `${iconColor}`,
            fillRule: 'nonzero',
          }}
        />
      </svg>
    </StyledIcon>
  );
};

export default TrashcanEmpty;
