import { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Switch from 'react-switch';

import { DefaultTheme, ThemeContext } from 'styled-components';

import usePersistedState from '../../utils/usePersistedState';

import {
  Button,
  Nav,
  Container,
  StyledNavLink,
  NavHeader,
  NavContent,
  NavFooter,
  ThemeSwitcher,
} from './styles';

import { MenuIcon, CloseIcon, MoonIcon, SunIcon } from '../Icons';
import DropDown from '../DropDown';
import { Menu } from '@headlessui/react';
import light from '../../theme/light';
import dark from '../../theme/dark';

interface NavListProps {
  toggleTheme(): void;
}

export default function Navlist(props: NavListProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const { colors, title } = useContext(ThemeContext);

  const dropDownRef = useRef(null);

  const onClick = () => setIsActive(!isActive);

  const toogleIcon = (e: any) =>
    setTheme(theme.title === 'dark' ? light : dark);

  return (
    <Container>
      <Button onClick={onClick}>
        <MenuIcon />
      </Button>

      {isActive && <StyledNavLink />}
      <Nav
        ref={dropDownRef}
        style={
          isActive
            ? { left: 0, transition: '450ms' }
            : { left: '-100%', transition: '450ms' }
        }
      >
        <NavHeader>
          <Button onClick={onClick}>
            <CloseIcon />
          </Button>
        </NavHeader>

        <NavContent>
          <NavLink to={'/'} onClick={onClick}>
            Home
          </NavLink>
          <NavLink to={'/products/category/electronics'} onClick={onClick}>
            Eletronics
          </NavLink>
          <NavLink to={'/products/category/jewelery'} onClick={onClick}>
            Jewlery
          </NavLink>

          <DropDown>
            <Menu.Item>
              <NavLink
                to={"/products/category/men's%20clothing"}
                onClick={onClick}
              >
                Men's clothing
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                to={"/products/category/women's%20clothing"}
                onClick={onClick}
              >
                Women's clothing
              </NavLink>
            </Menu.Item>
          </DropDown>
        </NavContent>

        <NavFooter>
          <div>User</div>
          <ThemeSwitcher>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                height: '3rem',
                width: '5rem',
              }}
              onClick={toogleIcon}
            >
              {theme.title === 'dark' ? <SunIcon /> : <MoonIcon />}
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
            </button>
          </ThemeSwitcher>
        </NavFooter>
      </Nav>
    </Container>
  );
}
