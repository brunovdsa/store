import usePersistedState from './utils/usePersistedState';

import { Header } from './components/Header';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/global';
import dark from './theme/dark';
import light from './theme/light';

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
