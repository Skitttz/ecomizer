import * as Dialog from '@radix-ui/react-dialog';
import {
  CloseButton,
  Content,
  Description,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './style';
import {
  IconCircleArrowDown,
  IconCircleArrowUp,
  IconX,
} from '@tabler/icons-react';
import { Controller, useForm } from 'react-hook-form';
import { NewTransactionFormInputs } from 'src/validations/newTransactionValidation';
import { useTransactionContext } from '@contexts/TransactionsContext';

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>();

  const { createTransaction } = useTransactionContext();

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data;
    await createTransaction({ description, price, category, type });

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <Description>
          Create your transaction quickly and effortlessly
        </Description>
        <CloseButton>
          <IconX />
        </CloseButton>

        <form
          action="submit"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <input
            type="text"
            placeholder="Description"
            {...register('description')}
            required
          />
          <input
            type="number"
            placeholder="Price"
            {...register('price', { valueAsNumber: true })}
            required
          />
          <input
            type="text"
            min={1}
            placeholder="Category"
            {...register('category')}
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType onChange={field.onChange} value={field.value}>
                  <TransactionTypeButton variant="income" value="income">
                    <IconCircleArrowDown /> Income
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <IconCircleArrowUp /> Outcome
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
