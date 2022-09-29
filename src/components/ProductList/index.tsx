import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductProps } from '../../interface/productInterface';
import ProductCard from '../ProductCard';
import { Container } from './styles';

interface ProductListProps extends ProductProps {}

export default function ProductList() {
  const [data, setData] = useState<ProductListProps[]>([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products').then((response) => {
      setData(response.data);
    });
  }, [data]);

  return (
    <Container>
      {data.map((item: ProductListProps) => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <ProductCard
            title={`${item.title.slice(0, 17)}...`}
            price={`$${item.price}`}
            image={item.image}
          />
        </Link>
      ))}
    </Container>
  );
}
