import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import usePersistedState from '../../utils/usePersistedState';

import dark from '../../theme/dark';
import light from '../../theme/light';

import { Container, PathContainer } from './styles';
import GlobalStyle from '../../assets/styles/global';

import { Header } from '../../components/Header';
import ProductInfo from '../../components/ProductInfo';

import { ProductProps } from '../../interface/productInterface';
import RelatedProducts from '../../components/RelatedProducts';
import { API } from '../../services';
import ProductPath from '../../components/ProductPath';

export interface ProductPageProps extends AddProductsToCart {}

export interface AddProductsToCart {
  date: Date;
  products: {
    productId: string | undefined;
    quantity: number;
    size?: string;
  };
}

export default function Product(props: ProductPageProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
  const [data, setData] = useState<ProductProps>();
  const [productsToCart, setProductsToCart] = useState<AddProductsToCart>();
  const [productSize, setProductSize] = useState<string>('');
  const [productiQuantity, setProductQuantity] = useState<number>(1);
  const [qtyOfProductsOnCart, setQtyOfProductsOnCart] = useState<string>('');

  const { id } = useParams();

  useEffect(() => {
    API.get(`/products/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const handleSize = (e: any) => {
    setProductSize(e.target.value);
  };

  const handleQuantity = (e: any) => {
    setProductQuantity(e.target.value);
  };

  let nowDate: Date = new Date();

  const onClick = async (e: any) => {
    e.preventDefault();

    const requestOptions = {
      date: nowDate.toString(),
      products: [
        {
          productId: id,
          quantity: productiQuantity,
          size: productSize,
        },
      ],
    };

    const data: AddProductsToCart = await API.post('carts', requestOptions);
    setProductsToCart(data);

    productsToCart !== undefined
      ? setQtyOfProductsOnCart(qtyOfProductsOnCart + 1)
      : setQtyOfProductsOnCart(qtyOfProductsOnCart);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        itemsOnCart={qtyOfProductsOnCart}
      />

      {data !== undefined ? (
        <>
          <PathContainer>
            <ProductPath to={'/'} content={'Home'} />
            <span>{'>'}</span>
            <ProductPath
              to={`/products/category/${data.category}`}
              content={`${data.category}`}
            />{' '}
            <span>{'>'}</span>
            <ProductPath
              to={`/product/${data.id}`}
              content={`${data.title.slice(0, 10)}...`}
            />
          </PathContainer>
          <Container>
            <ProductInfo
              id={data.id}
              title={`${data.title}`}
              price={`${data.price}`}
              description={`${data.description}`}
              category={`${data.category}`}
              image={`${data.image}`}
              onClick={onClick}
              handleQuantity={handleQuantity}
              handleSize={handleSize}
              size={productSize}
            />
          </Container>
        </>
      ) : (
        <Container></Container>
      )}

      {data !== undefined ? (
        <RelatedProducts category={data.category} id={data.id} />
      ) : (
        <Container></Container>
      )}
    </ThemeProvider>
  );
}
