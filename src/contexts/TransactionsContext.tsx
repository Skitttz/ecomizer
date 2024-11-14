import { ITransactionContextType } from '@interfaces/transaction-data';
import { createContext, useContext } from 'react';

export const TransactionContext = createContext<
  ITransactionContextType | undefined
>(undefined);

export function useTransactionContext(): ITransactionContextType {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactionContext must be used a TransactionContext');
  }
  return context;
}
