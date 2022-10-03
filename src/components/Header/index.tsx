import Navlist from '../Navlist';

import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
  id?: string;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Navlist toggleTheme={props.toggleTheme} />
    </Container>
  );
}
