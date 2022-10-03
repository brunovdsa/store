import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import usePersistedState from '../../utils/usePersistedState';
import { Header } from '../../components/Header';

import GlobalStyle from '../../assets/styles/global';
import { Container } from './styles';
import dark from '../../theme/dark';
import light from '../../theme/light';
import ProductList, { ItemProps } from '../../components/ProductList';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState<ItemProps[]>([]);

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  useEffect(() => {
    axios('https://fakestoreapi.com/products').then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <ProductList data={data} />
      </Container>
    </ThemeProvider>
  );
}
