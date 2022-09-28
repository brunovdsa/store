import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard, { ProductCardProps } from '../ProductCard';
import { Container } from './styles';

interface ProductListProps extends ProductCardProps {}

export default function ProductList() {
  const [data, setData] = useState<ProductListProps[]>([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Container>
      {data.map((item: ProductListProps) => (
        <ProductCard
          key={item.id}
          title={`${item.title.slice(0, 20)}...`}
          price={`$${item.price}`}
          image={item.image}
        />
      ))}
    </Container>
  );
}
