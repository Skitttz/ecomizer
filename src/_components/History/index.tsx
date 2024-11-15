import {
  HistoryContainer,
  HistoryTable,
  HistoryTableHeader,
  HistoryTableItem,
  TableContainer,
  TypographPrice,
} from './style';
import { useTransactionContext } from '@contexts/TransactionsContext';
import { ITransaction } from '@interfaces/transaction-data';
import { formatDate, priceFormatter } from '@utils/formatter';
import { IconCircleArrowDown, IconCircleArrowUp } from '@tabler/icons-react';
import { EmptyState } from '@components/EmptyState';
import { Loading } from '@components/Loading';

function History() {
  const { transactions, isLoading } = useTransactionContext();
  const isEmptyData = !isLoading && transactions.length === 0;
  if (isLoading) return <Loading />;

  return (
    <>
      {isEmptyData ? (
        <EmptyState />
      ) : (
        <HistoryContainer>
          <TableContainer>
            <HistoryTable>
              <HistoryTableHeader>
                <tr>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Date</th>
                </tr>
              </HistoryTableHeader>
              <tbody>
                {transactions.map((transaction: ITransaction) => {
                  return (
                    <tr key={transaction.id}>
                      <HistoryTableItem width="50%">
                        {transaction.description}
                      </HistoryTableItem>
                      <HistoryTableItem>
                        <TypographPrice variant={transaction.type}>
                          {transaction.type === 'outcome' ? (
                            <IconCircleArrowDown />
                          ) : (
                            <IconCircleArrowUp />
                          )}
                          {priceFormatter.format(transaction.price)}
                        </TypographPrice>
                      </HistoryTableItem>
                      <HistoryTableItem>
                        {transaction.category}
                      </HistoryTableItem>
                      <HistoryTableItem>
                        {formatDate(new Date(transaction.createdAt))}
                      </HistoryTableItem>
                    </tr>
                  );
                })}
              </tbody>
            </HistoryTable>
          </TableContainer>
        </HistoryContainer>
      )}
    </>
  );
}
export { History };
