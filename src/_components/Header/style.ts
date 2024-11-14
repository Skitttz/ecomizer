import styled from "styled-components"

  export const HeaderContainer = styled.header`
    background: ${(props) => props.theme["bg-header-gradient"]};
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  `

  export const LogoContent = styled.div`
  display:flex;
  align-items: center;
  gap: 0.5rem;
  img{
    width:50px;
  }
  `

  export const TypographLogo = styled.h1`
    color: #E1E1E6;
    font-size: 2rem;
  `;