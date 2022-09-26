import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { Header } from '../../components/Header';

import usePersistedState from '../../utils/usePersistedState';

import dark from '../../theme/dark';
import light from '../../theme/light';
import { Container } from './styles';

import GlobalStyle from '../../assets/styles/global';

export default function Home() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Container></Container>
    </ThemeProvider>
  );
}
