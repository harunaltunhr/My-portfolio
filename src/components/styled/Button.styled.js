import styled from "styled-components";

export const StyledButton = styled.a`
margin-top: 2.5rem; 
display: flex;
gap: 10rem;
width: max-content;
display: inline-block;
color: var(--color-primary);
padding: 0.75rem 1.2rem;
border-radius: 0.4rem;
cursor: pointer;
border: 1px solid var(--color-primary);
transition: var(--transition);
&:hover{
background-color: var(--color-primary);
color: var(--color-bg);
border-color: transparent;  

}
`


// .btn__hidden {

//     visibility: hidden;

// }

export const StyledButtonprimary = styled.a`
width: max-content;
    display: inline-block;
    color: var(--color-primary);
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition: var(--transition);
&:hover {
        background: var(--color-white);
        color: var(--color-bg);
        border-color: transparent;
    }
    background: var(--color-primary);
    color: var(--color-bg);
` 