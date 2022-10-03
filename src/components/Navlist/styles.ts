import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  background-color: transparent;
  font-family: ${(props) => props.theme.font_family.inter};
  color: ${(props) => props.theme.colors.text};
  border: none;
  height: 3rem;
  width: 4rem;
`;

export const StyledNavLink = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.overlay};
`;

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.background_900};
  color: ${(props) => props.theme.colors.text};
  position: fixed;
  top: 0;
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1;

  button,
  a {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font_size.sm};
    font-weight: ${(props) => props.theme.font_weight.black};
    text-decoration: none;
  }
`;

export const Li = styled.li`
  color: ${(props) => props.theme.colors.text};
`;
