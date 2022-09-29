import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  scroll-behavior: smooth;

  }
  body {
    background: ${(props) => props.theme.colors.background_800};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font_family.inter};
  }
`;
