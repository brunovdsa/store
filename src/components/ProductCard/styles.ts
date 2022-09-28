import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 1rem 0.5rem;
`;

export const Img = styled.img`
  height: 11em;
  width: 8.5rem;
`;

export const SyledContent = styled.div`
  height: 16.5rem;
  background-color: ${(props) => props.theme.colors.background_800};
  border-radius: 3px;
  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);
  width: -webkit-fill-available;

  div {
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem 0;
    width: fit-content;
  }

  div > span {
    padding: 0.4rem 0 0;
    margin: 0.3rem 0 0;
    font-weight: ${(props) => props.theme.font_weight.bold};
    border-top: 1px solid ${(props) => props.theme.colors.text};
    width: 100%;
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font_size.xsm};
  font-weight: ${(props) => props.theme.font_weight.regular};
  flex-shrink: 1;
`;
