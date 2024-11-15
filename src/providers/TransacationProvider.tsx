import { apiEndpointsEnum } from '@constants/generalConstants';
import { TransactionContext } from '@contexts/TransactionsContext';
import {
  ICreateTransaction,
  IReducerTransaction,
  ITransaction,
  ITransactionProviderProps,
} from '@interfaces/transaction-data';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { api } from 'src/libs/axios';

export function TransactionProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createTransaction = useCallback(async (data: ICreateTransaction) => {
    const { description, type, price, category } = data;
    const response = await api.post(apiEndpointsEnum.TRANSACTION, {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }, []);

  const calculateTransaction = (
    summary: IReducerTransaction,
    transaction: ITransaction,
  ) => {
    const { type, price } = transaction;

    const operations = {
      income: {
        income: summary.income + price,
        outcome: summary.outcome,
        total: summary.total + price,
      },
      outcome: {
        income: summary.income,
        outcome: summary.outcome + price,
        total: summary.total - price,
      },
    };

    return operations[type];
  };

  const initialSummary = {
    income: 0,
    outcome: 0,
    total: 0,
  };

  const summaryTransactions = useMemo(
    () => transactions.reduce(calculateTransaction, initialSummary),
    [transactions],
  );
  const loadTransactionsData = useCallback(async (query?: string) => {
    setIsLoading(true);
    try {
      const response = await api.get(apiEndpointsEnum.TRANSACTION, {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      });
      setTransactions(response.data);
    } catch (error) {
      console.error('Ops! Error to fetch data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTransactionsData();
  }, [loadTransactionsData]);
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        summaryTransactions,
        loadTransactions: loadTransactionsData,
        createTransaction,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
