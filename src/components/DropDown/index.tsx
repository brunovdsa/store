import { Menu } from '@headlessui/react';
import { ReactNode, useState } from 'react';
import { ExpandIcon } from '../Icons';
import { Container } from './styles';

export interface DropDownProps {
  children: ReactNode;
}

export default function DropDown(props: DropDownProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onClick = () => setIsActive(!isActive);
  return (
    <Container>
      <Menu>
        <Menu.Button onClick={onClick}>
          Clothing
          <ExpandIcon
            style={
              isActive
                ? { transform: 'rotate(0)', transition: '350ms' }
                : { transform: 'rotate(0.25turn)', transition: '350ms' }
            }
          />
        </Menu.Button>

        <Menu.Items>{props.children}</Menu.Items>
      </Menu>
    </Container>
  );
}
