import styled from 'styled-components';

export const CardContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  margin-top: -5rem;
`;

export enum CardsType {
  INCOME = 'income',
  OUTCOME = 'outcome',
  MYBALANCE = 'mybalance',
}

const STATUS_CARDS: Record<CardsType, string> = {
  [CardsType.INCOME]: 'bg-card-default-gradient',
  [CardsType.OUTCOME]: 'bg-card-default-gradient',
  [CardsType.MYBALANCE]: 'bg-card-mybalance-gradient',
};

export interface IStatusCard {
  variant: keyof typeof STATUS_CARDS;
}


export const CardContent = styled.div.withConfig({
  shouldForwardProp: (prop)  => prop !== 'variant',
})<IStatusCard>`
padding: 2rem;
border-radius: 6px;
background: ${( props ) => props.theme[STATUS_CARDS[props.variant]]};
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ variant, theme }) =>
      variant === CardsType.MYBALANCE ? theme['white-100'] : theme['gray-300']};
  }


strong{
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
}

`;
