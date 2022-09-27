import { NavLink } from 'react-router-dom';
import { ReactNode, useRef, useState } from 'react';
import { MenuIcon } from '../Icons';
import { Button, Nav, Container, StyledNavLink } from './styles';
import styled from 'styled-components';

export default function MenuDropDown() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <Container>
      <Button onClick={onClick}>
        <MenuIcon />
      </Button>
      {isActive ? (
        <span style={{ display: 'none' }}></span>
      ) : (
        <Nav ref={dropDownRef}>
          <Button onClick={onClick}>X</Button>
          <StyledNavLink>
            <NavLink to={'/'}>Home</NavLink>
          </StyledNavLink>
        </Nav>
      )}
    </Container>
  );
}
