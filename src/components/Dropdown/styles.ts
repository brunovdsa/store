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
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font_size.sm};
`;

export const Ul = styled.ul`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font_size.sm};
`;

export const Li = styled.li`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font_size.sm};
`;
