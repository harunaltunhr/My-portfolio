import styled from "styled-components";
export const StyledContainerfooter = styled.footer`
background: var(--color-primary);
padding: 3rem 0;
text-align: center;
font-size: 0.9rem;
margin-top: 7rem;
`

export const StyledContainera = styled.a`
color: var(--color-bg);
`
export const Styledcopyright = styled.div`
margin-bottom: 4rem;
color: var(--color-bg);
`

export const StyledContainerlogo = styled.div`
font-size: 2rem;
font-weight: 500;
margin-bottom: 2rem;
display: inline-block;
`

export const StyledContainerul = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 2rem;
margin: 0 auto 3rem;
@media screen and (max-width:600px ){
      flex-direction: column;
      gap: 1.5rem;
}
`

export const StyledContainersocials = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
margin-bottom: 4rem;
@media screen and (max-width:600px ){
      margin-bottom: 2.6rem;
    }
`

export const StyledContainersocialsa = styled.a`
background: var(--color-bg);
color: var(--color-white);
padding: 0.8rem;
border-radius: 0.7rem;
display: flex;
border: 1px solid transparent;
&:hover{
    background: transparent;
    color: var(--color-bg);
    border-color: var(--color-bg);
}
`

