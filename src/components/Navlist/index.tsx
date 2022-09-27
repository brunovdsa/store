import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import { MenuIcon, CloseIcon } from '../Icons';
import { Button, Nav, Container, StyledNavLink } from './styles';

export default function Navlist() {
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
            <NavLink to={'/category/eletronics'}>Eletronics</NavLink>
            <NavLink to={'/category/jewlery'}>Jewlery</NavLink>
            <NavLink to={'/category/men-clothing'}>Men's clothing</NavLink>
            <NavLink to={'/category/women-clothing'}>Women clothing</NavLink>
          </Nav>
        </StyledNavLink>
      )}
    </Container>
  );
}
