import styled from 'styled-components';

export const Container = styled.div``;

export const PathContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding: 1rem 1.5rem 0;
  font-size: ${(props) => props.theme.font_size.xsm};

  width: 95vw;

  a {
    display: flex;
    justify-content: center;
    text-decoration: underline;
    color: ${(props) => props.theme.colors.text};
    width: fit-content;
  }
`;
