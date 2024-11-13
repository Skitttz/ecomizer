import { IconArrowUpCircle } from '@tabler/icons-react';
import { CardContainer, CardContent, CardsType } from './style';

function Card() {
  return (
    <CardContainer>
      <CardContent variant={CardsType.MYBALANCE}>
        <header>
          <span>My Balance</span>
          <IconArrowUpCircle size={32} color="#" />
        </header>
        <strong>R$ 16.141,00</strong>
      </CardContent>
      <CardContent variant={CardsType.INCOME}>
        <header>
          <span>Income</span>
          {/* <IconArrowUpCircle size={32} color='#' /> */}
        </header>
        <strong>R$ 17.400,00</strong>
      </CardContent>
      <CardContent variant={CardsType.OUTCOME}>
        <header>
          <span>Outcome</span>
          {/* <IconArrowUpCircle size={32} color='#' /> */}
        </header>
        <strong>R$ 1.259,00</strong>
      </CardContent>
    </CardContainer>
  );
}

export { Card };
