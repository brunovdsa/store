import styled from 'styled-components';

export const Container = styled.div`
  max-width: 95vw;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colors.text_overlay_negative};

  background-color: ${(props) => props.theme.colors.caption_500};

  font-weight: ${(props) => props.theme.font_weight.bold};
  font-size: ${(props) => props.theme.font_size.sm};

  width: 100%;
  height: 2.5rem;
`;
