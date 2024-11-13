import styled from "styled-components";

export const MainFormContainer = styled.div`
display: flex;
justify-content: space-between;
`;


export const AddTransactionButton = styled.button`
  padding: 4px 8px;
  color: #F2F2F2;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  background: ${(props) => props.theme['bg-card-mybalance-gradient']};
  transition: all .2s;
  &:hover{
    opacity: 0.7;
  }
`