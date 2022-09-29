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

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.overlay};
  color: ${(props) => props.theme.colors.text};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1;
`;

export const StyledNavLink = styled.div`
  > nav > button,
  a {
    color: ${(props) => props.theme.colors.text_overlay};
    font-size: ${(props) => props.theme.font_size.sm};
    font-weight: ${(props) => props.theme.font_weight.black};
    text-decoration: none;
  }
`;

export const Li = styled.li`
  color: ${(props) => props.theme.colors.text};
`;