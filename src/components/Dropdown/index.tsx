import { useRef, useState } from 'react';
import { MenuIcon } from '../Icons';
import { Button, Nav, Container, Ul, Li } from './styles';

export default function MenuDropDown() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);

  return (
    <Container>
      <Button onClick={onClick}>
        <MenuIcon />
      </Button>
      {isActive ? (
        <span style={{ display: 'none' }}></span>
      ) : (
        <Nav ref={dropDownRef}>
          <Ul>
            <Li>Home</Li>
          </Ul>
        </Nav>
      )}
    </Container>
  );
}
