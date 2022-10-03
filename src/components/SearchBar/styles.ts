import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 0 0.3rem;

  div {
    display: flex;
    align-items: center;
    padding: 0.3rem;
    max-width: 95vw;
  }

  input {
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.colors.background_800};
    color: ${(props) => props.theme.colors.text};
    width: 100%;
    border: 1px solid transparent;
    padding: 0.3rem;
    :active,
    :focus {
      border-bottom: 1px solid ${(props) => props.theme.colors.text};
    }
  }
`;
