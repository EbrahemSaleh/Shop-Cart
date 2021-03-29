import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #c1c1c1;
  border-radius: 20px;
  cursor: pointer;
  transition: box-shadow 1s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px
        54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  button {
    border-radius: 0 0 20px 20px;
    color: whitesmoke;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    padding: 1rem;
    height: 100%;
  }
`;
