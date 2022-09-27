import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Navlist from '../Navlist';

import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

export function Header(props: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Navlist />
      <Switch
        onChange={props.toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={4}
        width={30}
        handleDiameter={15}
        offColor={colors.success}
        onColor={colors.success}
        offHandleColor={colors.background_800}
      />
    </Container>
  );
}
