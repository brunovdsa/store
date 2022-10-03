import { Menu } from '@headlessui/react';
import { ReactNode } from 'react';
import { ExpandIcon } from '../Icons';
import { Container } from './styles';

export interface DropDownProps {
  children: ReactNode;
}

export default function DropDown(props: DropDownProps) {
  return (
    <Container>
      <Menu>
        <Menu.Button>
          Clothing
          <ExpandIcon />
        </Menu.Button>

        <Menu.Items>{props.children}</Menu.Items>
      </Menu>
    </Container>
  );
}
