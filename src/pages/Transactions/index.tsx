import { Card } from '@components/Card';
import { History } from '@components/History';
import { BarChartGraph } from '@components/BarChartGraph';
import { TransactionProvider } from '@providers/TransacationProvider';
import { Form } from '@components/Form';

export function Transactions() {
  return (
    <>
      <TransactionProvider>
        <Card />
        <BarChartGraph />
        <Form />
        <History />
      </TransactionProvider>
    </>
  );
}
