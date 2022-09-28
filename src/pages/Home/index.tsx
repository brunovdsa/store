import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import usePersistedState from '../../utils/usePersistedState';

import ProductCard from '../../components/ProductCard';
import { Header } from '../../components/Header';

import GlobalStyle from '../../assets/styles/global';
import { Container } from './styles';
import dark from '../../theme/dark';
import light from '../../theme/light';
import ProductList from '../../components/ProductList';

export default function Home() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <ProductList />
      </Container>
    </ThemeProvider>
  );
}
