import { DefaultTheme, ThemeProvider } from 'styled-components';

import usePersistedState from '../../utils/usePersistedState';

import dark from '../../theme/dark';
import light from '../../theme/light';

import { Container } from './styles';
import { Header } from '../../components/Header';

import GlobalStyle from '../../assets/styles/global';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductInfo from '../../components/ProductInfo';
import { ProductProps } from '../../interface/productInterface';

interface DetailedProductProps extends ProductProps {}

export default function Product() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
  const [data, setData] = useState<DetailedProductProps>();

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
    </ThemeProvider>
  );
}
