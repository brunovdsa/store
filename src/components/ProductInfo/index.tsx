import { ProductProps } from '../../interface/productInterface';
import { AddProductsToCart } from '../../pages/Product';
import {
  Button,
  Container,
  H1,
  Header,
  ContainerDescription,
  SelectQty,
  ContainerSelectQty,
  Span,
  Price,
  ButtonAddToCart,
} from './styles';

export interface ProductInfoProps extends ProductProps {
  onClick: (e: any) => Promise<void>;
  handleQuantity: (e: any) => void;
  handleSize: (e: any) => void;
  size: string;
}

export default function ProductInfo(props: ProductInfoProps) {
  return (
    <Container>
      <Header>
        <img src={props.image} />
        <h1>{props.title}</h1>
        <Price>{`$${props.price}`}</Price>
        <Container>
          <Span>
            Size: <span>{props.size}</span>
          </Span>
          {props.category.includes('clothing') ? (
            <Container>
              <Button onClick={props.handleSize} value='XS'>
                XS
              </Button>
              <Button onClick={props.handleSize} value='S'>
                S
              </Button>
              <Button onClick={props.handleSize} value='S'>
                S
              </Button>
              <Button onClick={props.handleSize} value='L'>
                L
              </Button>
              <Button onClick={props.handleSize} value='XL'>
                XL
              </Button>
              <Button onClick={props.handleSize} value='XXL'>
                XXL
              </Button>
            </Container>
          ) : (
            <Span>No results...</Span>
          )}
          <ContainerSelectQty>
            <Span>Qty: </Span>
            <SelectQty onChange={props.handleQuantity}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </SelectQty>
          </ContainerSelectQty>
        </Container>
        <Container>
          <ButtonAddToCart onClick={props.onClick}>ADD TO CART</ButtonAddToCart>
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
