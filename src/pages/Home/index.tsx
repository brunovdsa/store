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
import SearchBar from '../../components/SearchBar';

export default function Home() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
  const [data, setData] = useState<ItemProps[]>([]);
  const [filteredData, setFilteredData] = useState<ItemProps[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    API.get('/products').then((response) => {
      setData(response.data);
    });
  }, []);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord: string = event.target.value;
    setSearch(searchWord);

    const newFilter = data.filter((value: ItemProps) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord.length > 0) {
      setFilteredData(newFilter);
    }
  };

  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Container>
        <SearchBar OnChange={handleFilter} value={search} />
        {filteredData.length > 0 ? (
          <ProductList data={filteredData} />
        ) : (
          <ProductList data={data} />
        )}
      </Container>
    </ThemeProvider>
  );
}
