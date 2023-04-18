import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Checkmark = ({ iconColor }) => {
  return (
    <StyledIcon>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 68 68"
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
          d="M0.521,33.855c-0,-18.41 14.924,-33.334 33.334,-33.334c18.409,-0 33.332,14.924 33.332,33.334c0,18.409 -14.923,33.332 -33.332,33.332c-18.41,0 -33.334,-14.923 -33.334,-33.332Zm52.775,-6.958c1.181,-1.186 1.177,-3.104 -0.009,-4.285l-2.147,-2.138c-1.186,-1.181 -3.105,-1.177 -4.286,0.009l-17.489,17.565l-10.064,-9.924c-1.192,-1.175 -3.11,-1.161 -4.286,0.03l-2.127,2.158c-1.175,1.191 -1.162,3.11 0.03,4.285l14.358,14.159c1.188,1.171 3.098,1.162 4.275,-0.02l21.745,-21.839Z"
          style={{
            fill: `${iconColor}`,
            stroke: `${iconColor}`,
            strokeWidth: '1.04px',
          }}
        />
      </svg>
    </StyledIcon>
  );
};

export default Checkmark;
