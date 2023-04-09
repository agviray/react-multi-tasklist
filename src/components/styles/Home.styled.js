import styled from 'styled-components';

export const StyledHome = styled.div`
  & > div:nth-of-type(1) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 2rem;

      span {
        display: inline-block;
        text-align: center;
        padding: 1rem;
        background-color: lightgray;
      }
    }
  }
`;
