import styled from "styled-components";


export const HeaderLogo = styled.div

export const HeaderUserContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const HeaderUserContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  color: ${(props) => props.theme['white-300']};
  h3{
    font-weight: bold;
  }
  p{
    font-size: 1rem;
  }
`;

export const HeaderImageUser = styled.img`
  width: 48px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-200']};
`;
