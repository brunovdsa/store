import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faMoon,
  faSun,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

interface IconProps {
  style: React.CSSProperties;
}

export function MenuIcon() {
  return <FontAwesomeIcon icon={faBars} size='2x' />;
}

export function CloseIcon() {
  return <FontAwesomeIcon icon={faXmark} size='lg' />;
}

export function SearchIcon() {
  return <FontAwesomeIcon icon={faMagnifyingGlass} />;
}

export function ExpandIcon(props: IconProps) {
  return <FontAwesomeIcon icon={faAngleDown} style={props.style} />;
}

export function MoonIcon() {
  return <FontAwesomeIcon icon={faMoon} />;
}

export function SunIcon() {
  return <FontAwesomeIcon icon={faSun} />;
}

export function ProfileIcon() {
  return <FontAwesomeIcon icon={faUser} size={'sm'} />;
}

export function CartIcon() {
  return <FontAwesomeIcon icon={faCartShopping} size='2x' />;
}
