import { Card } from '@components/Card';
import { History } from '@components/History';
import { BarChartGraph } from '@components/LineChart';

export function Transactions() {
  return (
    <>
      <Card />
      <BarChartGraph />
      <History />
    </>
  );
}
