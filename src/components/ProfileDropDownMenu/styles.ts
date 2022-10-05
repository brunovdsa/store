import styled from 'styled-components';

export const Container = styled.div`
  button {
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid ${(props) => props.theme.colors.negative_color};
    background-color: ${(props) => props.theme.colors.background_900};
    border-radius: 50%;
    position: relative;
  }

  div {
    box-shadow: -1px 3px 2px 0px hsl(0deg 0% 0% / 10%),
      1px 3px 1px -2px hsl(0deg 0% 0% / 10%),
      1px 1px 5px 0px hsl(0deg 0% 0% / 10%);
    position: absolute;
    bottom: 5.5rem;

    padding: 0.5rem 4rem 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    a {
      font-size: ${(props) => props.theme.font_size.xsm};
    }
  }
`;
