import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 0.5rem;
    border: none;
    background-color: ${(props) => props.theme.colors.background_900};
    border-bottom: 1px solid ${(props) => props.theme.colors.caption_400};

    svg {
      margin-left: 0.5rem;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;
