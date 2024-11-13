import { Form } from '@components/Form';
import {
  HistoryContainer,
  HistoryTable,
  HistoryTableHeader,
  HistoryTableItem,
  TypographPrice,
} from './style';

function History() {
  return (
    <HistoryContainer>
      <Form />
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
          <tr>
            <HistoryTableItem width="50%">Desenvolvimento</HistoryTableItem>
            <HistoryTableItem>
              <TypographPrice variant="outcome">R$ 12</TypographPrice>
            </HistoryTableItem>
            <HistoryTableItem>Venda</HistoryTableItem>
            <HistoryTableItem>Alimentacao</HistoryTableItem>
          </tr>
        </tbody>
      </HistoryTable>
    </HistoryContainer>
  );
}

export { History };
