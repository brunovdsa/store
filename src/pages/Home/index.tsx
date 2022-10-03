import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { API } from '../../services';
import usePersistedState from '../../utils/usePersistedState';
import { Header } from '../../components/Header';
import ProductList, { ItemProps } from '../../components/ProductList';

import GlobalStyle from '../../assets/styles/global';
import { Container } from './styles';
import dark from '../../theme/dark';
import light from '../../theme/light';

export default function Home() {
  const [data, setData] = useState<ItemProps[]>([]);

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  useEffect(() => {
    API.get('/products').then((response) => {
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
