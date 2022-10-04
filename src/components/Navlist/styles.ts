import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  background-color: transparent;
  font-family: ${(props) => props.theme.font_family.inter};
  color: ${(props) => props.theme.colors.text};
  border: none;

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
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1;

  button,
  a {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font_size.sm};
    font-weight: ${(props) => props.theme.font_weight.black};
    text-decoration: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.caption_400};
    width: 100%;
    padding: 0.5rem;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.caption_400};

  button {
    width: fit-content;
    border: none;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const NavFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  padding: 0 0.3rem 1.3rem;
`;

export const Li = styled.li`
  color: ${(props) => props.theme.colors.text};
`;
