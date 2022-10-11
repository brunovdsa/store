import { useState } from 'react';
import { ProductProps } from '../../interface/productInterface';
import {
  Button,
  Container,
  H1,
  Header,
  ContainerDescription,
  ButtonAddToCart,
  SelectQty,
  ContainerSelectQty,
  Span,
  Price,
} from './styles';

export interface ProductInfoProps extends ProductProps {}

export default function ProductInfo(props: ProductInfoProps) {
  const [size, setSize] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');

  const handleSize = (e: any) => {
    setSize(e.target.value);
  };

  return (
    <Container>
      <Header>
        <img src={props.image} />
        <h1>{props.title}</h1>
        <Price>{`$${props.price}`}</Price>
        <Container>
          <Span>
            Size: <span>{size}</span>
          </Span>
          {props.category.includes('clothing') ? (
            <Container>
              <Button onClick={handleSize} value='XS'>
                XS
              </Button>
              <Button onClick={handleSize} value='S'>
                S
              </Button>
              <Button onClick={handleSize} value='S'>
                S
              </Button>
              <Button onClick={handleSize} value='L'>
                L
              </Button>
              <Button onClick={handleSize} value='XL'>
                XL
              </Button>
              <Button onClick={handleSize} value='XXL'>
                XXL
              </Button>
            </Container>
          ) : (
            <Span>No results...</Span>
          )}
          <ContainerSelectQty>
            <Span>Qty: </Span>
            <SelectQty onChange={(e) => setQuantity(e.target.value)}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </SelectQty>
          </ContainerSelectQty>
        </Container>
        <Container>
          <ButtonAddToCart>ADD TO CART</ButtonAddToCart>
        </Container>
      </Header>
      <Container>
        <H1>Product description</H1>
        <ContainerDescription>
          <p>{props.description}</p>
          <span>
            <span>Category: </span>
            {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
          </span>
        </ContainerDescription>
      </Container>
    </Container>
  );
}
