import { Container, Header, Img, SyledContent, H1 } from './styles';

export interface ProductCardProps {
  id?: number;
  title: string;
  price: string;
  description?: string;
  category?: string;
  image: string;
  rating?: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <Container>
      <SyledContent>
        <Header>
          <Img src={props.image} />
        </Header>
        <Container>
          <H1>{props.title}</H1>
          <span>{props.price}</span>
        </Container>
      </SyledContent>
    </Container>
  );
}
