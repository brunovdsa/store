import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background_800};
  color: ${(props) => props.theme.colors.text};
  height: 100vh;
  margin: 0;
`;
