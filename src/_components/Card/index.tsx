import {
  IconCircleArrowDown,
  IconCircleArrowUp,
  IconMoneybag,
} from '@tabler/icons-react';
import { CardContainer, CardContent, CardsType } from './style';
import { useTransactionContext } from '@contexts/TransactionsContext';
import { priceFormatter } from '@utils/formatter';

function Card() {
  const { summaryTransactions } = useTransactionContext();

  return (
    <CardContainer>
      <CardContent variant={CardsType.MYBALANCE}>
        <header>
          <span>My Balance</span>
          <IconMoneybag size={32} />
        </header>
        <strong>{priceFormatter.format(summaryTransactions.total)}</strong>
      </CardContent>
      <CardContent variant={CardsType.INCOME}>
        <header>
          <span>Income</span>
          <IconCircleArrowUp size={32} />
        </header>
        <strong>{priceFormatter.format(summaryTransactions.income)}</strong>
      </CardContent>
      <CardContent variant={CardsType.OUTCOME}>
        <header>
          <span>Outcome</span>
          <IconCircleArrowDown size={32} />
        </header>
        <strong>{priceFormatter.format(summaryTransactions.outcome)}</strong>
      </CardContent>
    </CardContainer>
  );
}

export { Card };
