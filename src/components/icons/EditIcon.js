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
const EditIcon = () => {
  return (
    <StyledIcon>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 67 67"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        xmlnsserif="http://www.serif.com/"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLineJoin: 'round',
          strokeMiterLimit: '2',
        }}
      >
        <path
          d="M62.045,2.161c-2.881,-2.881 -7.538,-2.881 -10.419,-0l-3.96,3.947l12.88,12.88l3.96,-3.96c2.881,-2.881 2.881,-7.539 -0,-10.42l-2.461,-2.447Zm-39.363,28.944c-0.803,0.803 -1.421,1.789 -1.777,2.881l-3.894,11.683c-0.381,1.132 -0.079,2.381 0.763,3.237c0.842,0.855 2.092,1.144 3.237,0.763l11.683,-3.895c1.078,-0.355 2.065,-0.973 2.881,-1.776l22.01,-22.024l-12.893,-12.893l-22.01,22.024Zm-10.052,-23.379c-6.973,0 -12.63,5.657 -12.63,12.63l-0,33.681c-0,6.972 5.657,12.63 12.63,12.63l33.68,-0c6.973,-0 12.631,-5.658 12.631,-12.63l-0,-12.631c-0,-2.328 -1.882,-4.21 -4.21,-4.21c-2.329,0 -4.211,1.882 -4.211,4.21l0,12.631c0,2.328 -1.881,4.21 -4.21,4.21l-33.68,-0c-2.329,-0 -4.21,-1.882 -4.21,-4.21l0,-33.681c0,-2.328 1.881,-4.21 4.21,-4.21l12.63,0c2.329,0 4.21,-1.881 4.21,-4.21c0,-2.329 -1.881,-4.21 -4.21,-4.21l-12.63,0Z"
          style={{ fillRule: 'nonzero' }}
        />
      </svg>
    </StyledIcon>
  );
};

export default EditIcon;
