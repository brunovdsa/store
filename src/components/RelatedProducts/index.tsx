import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductProps } from '../../interface/productInterface';
import ProductCard from '../ProductCard';
import { Container, ContainerProductList, H1, Title } from './styles';
import GlobalStyle from '../../assets/styles/global';

export interface RelatedProductsProps {
  id: number;
  category: string;
}

export interface RelatedProducsDataProps {
  id: number;
  title: string;
  price: string;
  image: string;
  map(arg0: (item: any) => any): import('react').ReactNode;
}

export default function RelatedProducts(props: RelatedProductsProps) {
  const [data, setData] = useState<RelatedProducsDataProps>();
  const [category, setCategory] = useState(props.category);

  if (category === "men's clothing") {
    setCategory(props.category.slice(0, 5) + '%20' + props.category.slice(6));
  }
  if (category === "women's clothing") {
    setCategory(props.category.slice(0, 7) + '%20' + props.category.slice(8));
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/category/${category}`).then(
      (response) => {
        setData(response.data);
      }
    );
  }, [props.id]);

  return (
    <Container>
      <GlobalStyle />
      <Title>
        <H1>Shop more compatible items</H1>
      </Title>
      <ContainerProductList>
        {data?.map((item: ProductProps) => (
          <Link to={`/product/${item.id}`} key={item.id} onClick={scrollToTop}>
            <ProductCard
              title={`${item.title.slice(0, 17)}...`}
              price={`$${item.price}`}
              image={item.image}
            />
          </Link>
        ))}
      </ContainerProductList>
    </Container>
  );
}
