import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import usePersistedState from '../../utils/usePersistedState';

import { Header } from '../../components/Header';
import ProductList, { ItemProps } from '../../components/ProductList';

import GlobalStyle from '../../assets/styles/global';
import dark from '../../theme/dark';
import light from '../../theme/light';

import { Container, PathContainer } from './styles';
import { API } from '../../services';
import ProductPath from '../../components/ProductPath';

export default function Category() {
  const [data, setData] = useState<ItemProps[]>([]);

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const { id } = useParams();

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  console.log(id);

  useEffect(() => {
    API.get(`/products/category/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);

  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header toggleTheme={toggleTheme} />
        <PathContainer>
          <ProductPath to={'/'} content={'Home'} />
        </PathContainer>
        <ProductList data={data} />
      </Container>
    </ThemeProvider>
  );
}
