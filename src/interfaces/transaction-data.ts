import { ReactNode } from "react";

export interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export interface ICreateTransaction {
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
}

export interface ITransactionSummary {
  income: number;
  outcome: number;
  total: number;
}


export interface ITransactionContextType {
  transactions: ITransaction[];
  isLoading: boolean;
  loadTransactions: (query?:string) => Promise<void>;
  createTransaction: (transaction:ICreateTransaction) => Promise<void>;
  summaryTransactions: ITransactionSummary;
}

export interface ITransactionProviderProps {
  children: ReactNode;
}

export interface IReducerTransaction {
  income: number;
  outcome: number;
  total: number;
}