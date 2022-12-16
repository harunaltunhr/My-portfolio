import styled from "styled-components";
export const StyledContainercontact = styled.div`

width: var(--container-width-lg);
margin: 0 auto;
width: 58%;
display: grid;
grid-template-columns: 30% 58%;
gap: 12%;
@media screen and (max-width:1024px ){
grid-template-columns: 1fr;
gap: 2rem;
@media screen and (max-width:600px ){
width: var(--container-width-sm);
};
`

export const Styledcontactoptions = styled.div`
display: flex;
flex-direction: column;
gap: 1.2rem;
`
export const Styledcontactoption = styled.div`
background: var(--color-bg-variant);
padding: 1.2rem;
border-radius: 1.2rem;
text-align: center;
border: 1px solid transparent;
transition: var(transition);
&:hover {
    background:transparent;
    border-color: var(--color-primary-variant);
`
export const Styledform = styled.form`
display: flex;
flex-direction: column;
gap: 1.2rem;
`
export const Styledinput = styled.input`
width: 100%;
padding: 1.5rem;
border-radius: 0.5rem;
background: transparent;
border: 2px solid var(--color-primary-variant);
resize: none;
color: var(--color-white);
`