import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import { MenuIcon, CloseIcon } from '../Icons';
import { Button, Nav, Container, StyledNavLink } from './styles';

import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface NavListProps {
  toggleTheme(): void;
}

export default function Navlist(props: NavListProps) {
  const { colors, title } = useContext(ThemeContext);
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <Container>
      <Button onClick={onClick}>
        <MenuIcon />
      </Button>
      {!isActive ? (
        <span style={{ display: 'none' }}></span>
      ) : (
        <StyledNavLink>
          <Nav ref={dropDownRef}>
            <Button onClick={onClick}>
              <CloseIcon />
            </Button>
            <NavLink to={'/'} onClick={onClick}>
              Home
            </NavLink>
            <NavLink to={'/products/category/electronics'} onClick={onClick}>
              Eletronics
            </NavLink>
            <NavLink to={'/products/category/jewelery'} onClick={onClick}>
              Jewlery
            </NavLink>
            <NavLink
              to={"/products/category/men's%20clothing"}
              onClick={onClick}
            >
              Men's clothing
            </NavLink>
            <NavLink
              to={"/products/category/women's%20clothing"}
              onClick={onClick}
            >
              Women clothing
            </NavLink>
            <Switch
              onChange={props.toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={4}
              width={30}
              handleDiameter={15}
              offColor={colors.text_overlay}
              onColor={colors.text_overlay}
              offHandleColor={colors.text_overlay_negative}
            />
          </Nav>
        </StyledNavLink>
      )}
    </Container>
  );
}
