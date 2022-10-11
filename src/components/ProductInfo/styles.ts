import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 95vw;
`;

export const Price = styled.span`
  font-size: ${(props) => props.theme.font_size.md};
  font-weight: ${(props) => props.theme.font_weight.black};
`;

export const ContainerSelectQty = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start !important;

  span {
    margin: 0;
  }
`;

export const Span = styled.span`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.caption_400};
  font-size: ${(props) => props.theme.font_size.xsm};
  font-weight: ${(props) => props.theme.font_weight.regular};

  span {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font_size.xsm};
    font-weight: ${(props) => props.theme.font_weight.bold};
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  margin: 0 0 1rem;
  padding: 1rem 0;

  border-bottom: 1px solid ${(props) => props.theme.colors.caption_300};

  img {
    width: 95vw;
    height: fit-content;
  }
  h1 {
    margin: 0.5rem 0 0;
    font-size: ${(props) => props.theme.font_size.md};
    font-weight: ${(props) => props.theme.font_weight.regular};
  }

  div > div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
  }
`;

export const SelectQty = styled.select``;

export const ButtonAddToCart = styled.button`
  margin: 1rem 0;

  background-color: ${(props) => props.theme.colors.caption_500};
  color: ${(props) => props.theme.colors.text_overlay};

  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.bold};

  border: 1px solid ${(props) => props.theme.colors.caption_500};

  padding: 0.8rem 0;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.negative_color};
  font-size: ${(props) => props.theme.font_size.xsm};
  font-weight: ${(props) => props.theme.font_weight.bold};
  width: 3rem;
  height: 1.5rem;

  background: ${(props) => props.theme.colors.background_800};
  border: 1px solid ${(props) => props.theme.colors.negative_color};
  border-radius: 5px;

  :active,
  :focus {
    color: ${(props) => props.theme.colors.text};
    border: 1px solid ${(props) => props.theme.colors.text};
  }
`;

export const ContainerDescription = styled.div`
  margin: 0 0 3rem;
  p {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font_size.sm};
    font-weight: ${(props) => props.theme.font_weight.regular};
    max-width: 95vw;
    margin: 0 0 0.9rem;
  }

  span > span {
    font-weight: bold;
  }
`;

export const H1 = styled.h1`
  margin: 1rem 0;
  font-size: ${(props) => props.theme.font_size.lg};
  font-weight: ${(props) => props.theme.font_weight.bold};
`;
