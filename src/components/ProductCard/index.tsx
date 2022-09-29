import { Container, Header, Img, SyledContent, H1 } from './styles';

export interface ProductCardProps {
  title: string;
  price: string;
  image: string;
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
