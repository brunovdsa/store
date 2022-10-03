import { Link } from 'react-router-dom';

import ProductCard, { ProductCardProps } from '../ProductCard';
import { Container } from './styles';

export interface ProductListProps {
  data: ItemProps[];
}

export interface ItemProps {
  id: string;
  title: string;
  price: string;
  image: string;
}

export default function ProductList(props: ProductListProps) {
  return (
    <Container>
      {props.data.map((item: ItemProps) => (
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
