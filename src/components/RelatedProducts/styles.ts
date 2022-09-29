import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 95vw;
  justify-content: center;
`;

export const Title = styled.div`
  width: 95vw;
`;

export const H1 = styled.h1``;

export const ContainerProductList = styled.div`
  display: grid;
  grid-template-columns: 46% 46%;
  justify-content: center;
  gap: 0.6rem;

  a {
    text-decoration: none;
  }
  width: 95vw;

  margin: 0 0 3rem 0;
`;
