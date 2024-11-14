import { CartesianGrid, Legend, Bar, BarChart, XAxis, YAxis } from 'recharts';
import { BarChartContainer } from './style';
import { useMemo } from 'react';
import { useTransactionContext } from '@contexts/TransactionsContext';

export function BarChartGraph() {
  const { summaryTransactions } = useTransactionContext();
  const data = [
    {
      name: 'My Balance',
      value: summaryTransactions.total,
    },
    {
      name: 'Income',
      value: summaryTransactions.income,
    },
    {
      name: 'Outcome',
      value: summaryTransactions.outcome,
    },
  ];

  const barChartGraphMemo = useMemo(() => {
    return (
      <BarChart
        width={1140}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="value" fill="#28BB76" name="Value" />
      </BarChart>
    );
  }, [data]);

  return <BarChartContainer>{barChartGraphMemo}</BarChartContainer>;
}
