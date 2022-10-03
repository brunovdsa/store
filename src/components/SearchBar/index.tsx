import { ChangeEventHandler } from 'react';
import { SearchIcon } from '../Icons';
import { Container } from './styles';

interface SearchBarProps {
  OnChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <Container>
      <Container>
        <input
          type='text'
          placeholder='Search for a product...'
          value={props.value}
          onChange={props.OnChange}
        />
        <SearchIcon />
      </Container>
    </Container>
  );
}
