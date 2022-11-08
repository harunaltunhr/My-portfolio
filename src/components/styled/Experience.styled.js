import styled from "styled-components";

export const ExperienceContainer = styled.div`

grid-template-columns: 1fr 1fr;
gap: 2rem;
width: var(--container-width-lg);
margin: 0 auto;
@media screen and(max-width:1024px ){
        width: var(--container-width-md);
    }
@media screen and(max-width:600px ){  
            width: var(--container-width-ms);
    }


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
       padding: 1rem;
    }


`
export const Experiencedetails = styled.article`
display: flex;
gap: 1rem;
`
