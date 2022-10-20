import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.background_900};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  position: relative;
  a {
    width: 4rem;
    border: none;
    background-color: transparent;

    svg {
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const H1 = styled.h1`
  position: absolute;
  color: ${(props) => props.theme.colors.background_800};
  font-size: ${(props) => props.theme.font_size.xsm};
  padding: 0.2rem 0.4rem;

  background-color: ${(props) => props.theme.colors.success};
  border-radius: 50%;
  bottom: 0.8rem;
  right: 1.3rem;
`;
