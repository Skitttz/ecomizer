import styled from "styled-components";

export const MainFormContainer = styled.div`
display: flex;
justify-content: space-between;
@media (max-width:40rem){
  margin-top: 2rem;
  flex-direction: column;
  gap: 1.5rem;
}
`;


export const AddTransactionButton = styled.button`
  padding: 8px 16px;
  opacity: 0.95;
  color: ${props => props.theme['white-200']};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  background: ${(props) => props.theme['bg-card-mybalance-gradient']};
  transition: all .2s;
  &:hover{
    opacity: 1;
  }

  @media (max-width:40rem){
    padding: 12px 16px;
}
`