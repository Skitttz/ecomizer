import { IconSearch } from '@tabler/icons-react';
import { SearchFormContainer } from './style';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for a transaction by name..." />
      <button type="submit">
        <IconSearch size={20} /> Search
      </button>
    </SearchFormContainer>
  );
}
