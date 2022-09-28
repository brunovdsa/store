import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={`/product/${item.id}`}>
          <ProductCard
            key={item.id}
            title={`${item.title.slice(0, 17)}...`}
            price={`$${item.price}`}
            image={item.image}
          />
        </Link>
      ))}
    </Container>
  );
}
