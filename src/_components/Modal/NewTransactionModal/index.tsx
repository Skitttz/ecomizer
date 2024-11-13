import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './style';
import { IconX } from '@tabler/icons-react';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Add Transaction</Dialog.Title>
        <CloseButton>
          <IconX />
        </CloseButton>

        <form action="submit">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
