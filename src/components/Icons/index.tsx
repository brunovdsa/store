import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faBars,
  faChevronCircleDown,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export function MenuIcon() {
  return <FontAwesomeIcon icon={faBars} size='2x' />;
}

export function CloseIcon() {
  return <FontAwesomeIcon icon={faXmark} size='lg' />;
}

export function SearchIcon() {
  return <FontAwesomeIcon icon={faMagnifyingGlass} />;
}

export function ExpandIcon() {
  return <FontAwesomeIcon icon={faAngleDown} />;
}
