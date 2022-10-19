import { Link } from 'react-router-dom';
import { DefaultTheme } from 'styled-components';
import { CartIcon } from '../Icons';
import Navlist from '../Navlist';

import { Button, Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
  id?: string;
  theme: DefaultTheme;
  itemsOnCart?: any;
}

export function Header(props: HeaderProps) {
  // const itemsOnCart: number = props.itemsOnCart;

  return (
    <Container>
      <Navlist toggleTheme={props.toggleTheme} theme={props.theme} />
      <Button>
        <Link to={`/cart/${props.itemsOnCart}`}>
          <CartIcon />
        </Link>
        {/* {<h1>{itemsOnCart}</h1>} */}
      </Button>
    </Container>
  );
}
