import styled from 'styled-components';

export const StyledHome = styled.div`
  & > div:nth-of-type(1) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 3rem;

      span {
        display: inline-block;
        text-align: center;
        padding: 0.5rem 1rem;
        background-color: #7cb4f0;
        color: #fefefe;
        border-radius: 5px;

        &:hover {
          cursor: pointer;
          background-color: #3a70a9;
        }
      }
    }
  }
`;
