import { Link } from 'react-router-dom';
import { DefaultTheme } from 'styled-components';
import { CartIcon } from '../Icons';
import Navlist from '../Navlist';

import { CardContainer, Container, H1 } from './styles';

interface HeaderProps {
  toggleTheme(): void;
  id?: string;
  theme: DefaultTheme;
  itemsOnCart: number;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Navlist toggleTheme={props.toggleTheme} theme={props.theme} />
      <CardContainer>
        <Link to={`/cart/${props.itemsOnCart}`}>
          <CartIcon />
        </Link>
        {props.itemsOnCart === 0 ? (
          <H1 style={{ display: 'none', backgroundColor: 'transparent' }}></H1>
        ) : (
          <H1>{props.itemsOnCart}</H1>
        )}
      </CardContainer>
    </Container>
  );
}
