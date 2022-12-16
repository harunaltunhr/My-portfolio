import styled from "styled-components";

export const ExperienceContainer = styled.div`
width: var(--container-width-lg);
width: 100%;
display: grid;
justify-items:center;
grid-template-columns: 50% 50%;

@media screen and (max-width:1024px ){
grid-template-columns: 1fr;

@media screen and (max-width:600px ){
width: var(--container-width-sm);
};
`
export const ExperienceContainerdiv = styled.div`
background-color: var(--color-bg-variant);
padding: 2.4rem 5rem;
margin: 2rem 0;
border-radius: 2rem;
border: 1px solid transparent;
transition: var(--transition);
&:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
}
@media screen and (max-width:600px ){

        gap: 1rem;

};

@media screen and (max-width:1024px ){
width: 60%;
padding: 2rem;

width: 100%;
            padding: 2rem 1rem 
}
`

export const Experiencecontent = styled.div`
display: grid;
   grid-template-columns: 1fr 1fr;
   row-gap: 2rem; 
   @media screen and (max-width:1024px ){
       padding: 2rem;
    }


`
export const Experiencedetails = styled.article`
display: flex;
gap: 1rem;
margin: 0.5rem;

`
