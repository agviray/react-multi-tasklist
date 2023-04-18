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

const Trashcan = ({ iconColor }) => {
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
          d="M20.086,2.629c0.803,-1.618 2.451,-2.629 4.249,-2.629l17.887,-0c1.797,-0 3.446,1.011 4.248,2.629l1.07,2.126l14.261,-0c2.63,-0 4.755,2.123 4.755,4.752c0,2.631 -2.125,4.754 -4.755,4.754l-57.046,-0c-2.63,-0 -4.755,-2.123 -4.755,-4.754c0,-2.629 2.125,-4.752 4.755,-4.752l14.261,-0l1.07,-2.126Zm-15.331,16.386l57.046,0l0,47.537c0,5.243 -4.263,9.506 -9.507,9.506l-38.032,-0c-5.244,-0 -9.507,-4.263 -9.507,-9.506l-0,-47.537Zm14.261,9.507c-1.307,0 -2.377,1.07 -2.377,2.378l0,33.274c0,1.307 1.07,2.378 2.377,2.378c1.307,-0 2.377,-1.071 2.377,-2.378l-0,-33.274c-0,-1.308 -1.07,-2.378 -2.377,-2.378Zm14.262,0c-1.308,0 -2.376,1.07 -2.376,2.378l-0,33.274c-0,1.307 1.068,2.378 2.376,2.378c1.307,-0 2.377,-1.071 2.377,-2.378l-0,-33.274c-0,-1.308 -1.07,-2.378 -2.377,-2.378Zm14.262,0c-1.308,0 -2.377,1.07 -2.377,2.378l0,33.274c0,1.307 1.069,2.378 2.377,2.378c1.308,-0 2.376,-1.071 2.376,-2.378l0,-33.274c0,-1.308 -1.068,-2.378 -2.376,-2.378Z"
          style={{
            fill: `${iconColor}`,
            fillRule: 'nonzero',
          }}
        />
      </svg>
    </StyledIcon>
  );
};

export default Trashcan;
