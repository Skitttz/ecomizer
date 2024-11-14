import { Card } from '@components/Card';
import { History } from '@components/History';
import { BarChartGraph } from '@components/BarChartGraph';
import { TransactionProvider } from '@providers/TransacationProvider';

export function Transactions() {
  return (
    <>
      <TransactionProvider>
        <Card />
        <BarChartGraph />
        <History />
      </TransactionProvider>
    </>
  );
}
