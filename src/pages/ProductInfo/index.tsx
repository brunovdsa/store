import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import usePersistedState from '../../utils/usePersistedState';

import dark from '../../theme/dark';
import light from '../../theme/light';

import { Container } from './styles';
import GlobalStyle from '../../assets/styles/global';

import { Header } from '../../components/Header';
import ProductInfo from '../../components/ProductInfo';

import { ProductProps } from '../../interface/productInterface';
import RelatedProducts from '../../components/RelatedProducts';

export default function Product() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
  const [data, setData] = useState<ProductProps>();

  const { id } = useParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />

      {data !== undefined ? (
        <Container>
          <ProductInfo
            id={data.id}
            title={`${data.title}`}
            price={`${data.price}`}
            description={`${data.description}`}
            category={`${data.category}`}
            image={`${data.image}`}
          />
        </Container>
      ) : (
        <Container>
          <span>teste</span>
        </Container>
      )}

      {data !== undefined ? (
        <RelatedProducts category={data.category} id={data.id} />
      ) : (
        <Container></Container>
      )}
    </ThemeProvider>
  );
}
