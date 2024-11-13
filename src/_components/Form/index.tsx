import { NewTransactionModal } from '@components/Modal/NewTransactionModal';
import { SearchForm } from './SearchForm';
import { AddTransactionButton, MainFormContainer } from './style';
import * as Dialog from '@radix-ui/react-dialog';

export function Form() {
  return (
    <MainFormContainer>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <AddTransactionButton type="button">
            Add Transaction
          </AddTransactionButton>
        </Dialog.Trigger>
        <NewTransactionModal />
      </Dialog.Root>
      <SearchForm />
    </MainFormContainer>
  );
}
