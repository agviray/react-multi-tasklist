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
      flex-direction: column;
      gap: 15px;
      padding-bottom: 3rem;

      @media screen and (min-width: 370px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      span {
        display: inline-block;
        text-align: center;
        padding: 0.5rem 1rem;
        border-radius: 5px;

        &:nth-of-type(1) {
          background-color: #7b6cf6;
          color: #fefefe;

          &:hover {
            cursor: pointer;
            background-color: #493f96;
          }
        }

        &:nth-of-type(2) {
          background-color: #ff6464;
          color: #fefefe;

          &:hover {
            cursor: pointer;
            background-color: #b64646;
          }

          &.disabled {
            color: #cacaca;
            background-color: #efefef;
            border: 1px solid #efefef;

            &:hover {
              cursor: not-allowed;
            }
          }
        }
      }
    }
  }
`;
