import { IconSearch } from '@tabler/icons-react';
import { SearchFormContainer } from './style';
import { useForm } from 'react-hook-form';
import {
  SearchFormInputs,
  searchFormSchema,
} from 'src/validations/searchFormValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransactionContext } from '@contexts/TransactionsContext';
import { memo } from 'react';

function SearchFormComponent() {
  const { loadTransactions } = useTransactionContext();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransaction(data: SearchFormInputs) {
    await loadTransactions(data.query);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Search for a transaction by name..."
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <IconSearch size={20} /> Search
      </button>
    </SearchFormContainer>
  );
}

export const SearchForm = memo(SearchFormComponent);
