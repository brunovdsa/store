import { Menu, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { ProfileIcon } from '../Icons';
import { Container } from './styles';
import './styles.ts';

export default function ProfileMenuDropDown() {
  return (
    <Container>
      <Menu>
        <Menu.Items>
          <Menu.Item>
            <NavLink to='#'>Profile</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to='#'>Settings</NavLink>
          </Menu.Item>
        </Menu.Items>

        <Menu.Button>
          <ProfileIcon />
        </Menu.Button>
      </Menu>
    </Container>
  );
}
