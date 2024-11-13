import styled from "styled-components";

export const HistoryContainer = styled.main`
  margin: 4rem auto 0;
  flex: 1;
  padding: 0 1.5rem;
`

export const HistoryTable = styled.table`
  width: 100%;
  min-width: 600px;
  flex: 1;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
`;

export const HistoryTableHeader = styled.thead`
  width: 100%;
  flex: 1;
  text-align: left;
  background-color: transparent;
  th:first-child {
    width: 50%;
  }
  th:nth-child(n + 2) {
    width: auto;
  }

  th{
    padding: 1.25rem 2rem;
  }

  th:last-child{
    border-top-right-radius: 8px;
  }
`;

export const HistoryTableItem = styled.td`
  padding: 1.25rem 2rem;
  background-color: rgb(43, 43, 45,0.64);

  &:first-child{
    border-radius: 6px 0 0 6px;
  }
  &:last-child{
    border-radius: 0 6px 6px 0;
  }
`;

interface IPriceStatus {
  variant: 'income' | 'outcome'
}

export const TypographPrice = styled.span.withConfig({
  shouldForwardProp: (prop)  => prop !== 'variant',
})<IPriceStatus>`

  color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']}
`;