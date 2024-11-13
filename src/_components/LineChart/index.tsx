import { CartesianGrid, Legend, Bar, BarChart, XAxis, YAxis } from 'recharts';
import { LineChartContainer } from './style';
import { useMemo } from 'react';

export function BarChartGraph() {
  const data = [
    {
      name: 'My Balance',
      value: 16141,
    },
    {
      name: 'Income',
      value: 174000,
    },
    {
      name: 'Outcome',
      value: 1259,
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

  return <LineChartContainer>{barChartGraphMemo}</LineChartContainer>;
}
