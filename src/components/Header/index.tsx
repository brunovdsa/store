import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

export function Header(props: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <header>
      <Container>
        <Switch
          onChange={props.toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.primary}
          onColor={colors.success}
        />
      </Container>
    </header>
  );
}
