import { DefaultTheme } from 'styled-components';
import Navlist from '../Navlist';

import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
  id?: string;
  theme: DefaultTheme;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Navlist toggleTheme={props.toggleTheme} theme={props.theme} />
    </Container>
  );
}
