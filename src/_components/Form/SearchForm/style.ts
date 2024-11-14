import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  input{
    width: 435px;
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-100']};
    padding: 1rem;
    transition: all 0.2s;
    &:focus{
      box-shadow: 0 0 2px 1px ${(props) => props.theme['green-500']};
    }
    &::placeholder{
      color: ${props => props.theme['gray-300']};
    }
  }

  @media (max-width:50rem){
    input{width:100%;}
  }

  button{
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    color: ${(props) => props.theme['white-200']};
    border: 0;
    padding: 0 16px;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    &:disabled{
      opacity: 0.6;
    }
    &:hover{
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme['white-100']};
    }
  }

`;