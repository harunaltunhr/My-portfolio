import styled from "styled-components";

export const Styledportfolio = styled.section`
margin-top: 8rem;
display: block;
`

export const Styledpcontainerportfolio = styled.div`
display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    @media screen and (max-width:1024px ){
        
            grid-template-columns: 1fr 1fr;
            gap: 1.2rem;    
        }        
@media screen and (max-width:600px ){
            grid-template-columns: 1fr;
            gap: 1rem
        };
`
export const Styledportfolioitem = styled.article`
background: var(--color-bg-variant);
padding: 1.2rem;
border-radius: 2rem;
border:  1px solid transparent;
transition: var(--transition);
&:hover {
    border-color:  var(--color-primary-variant);
    background: transparent;
`
export const Styledportfolioitemimage = styled.div`
border-radius: 1.5rem;
overflow: hidden;
`
export const Styledportfolioitemcta = styled.div`
display: inline-block;
gap: 1rem;
margin-bottom: 1rem;
`
export const Styledportfolioitemheader = styled.h3`
margin: 1.2rem 0 2rem;
`