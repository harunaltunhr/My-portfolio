import styled from "styled-components";


export const StyledAboutContainer = styled.div`
margin: 0 auto;
width: var(--container-width-lg);
grid-gap: 15%;
display: grid;
grid-template-columns: 35% 50%;
gap: 15%;
}
@media screen and (max-width:1024px ){
        grid-template-columns: 1fr;
        gap: 0;
    }
`

export const StyledAboutImgdiv = styled.div`
width: 100%;
aspect-ratio: 1/1;
border-radius: 2em;
background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    
);
display: grid;
place-items: center;
@media screen and (max-width:1024px ){
    width:  50%;
    margin: 2rem auto 4rem;

}
@media screen and (max-width:600px ){
width: 65%;
margin: 0 auto 3rem 
}
`
export const StyledAboutImg = styled.img`

border-radius: 2rem;
overflow: hidden;
transform: rotate(10deg);
transition: var(--transition);
&:hover {
    transform: rotate(0);
}
`
export const StyledAboutcontentP = styled.p`
margin: 2rem 0 2.6rem;
color:  var(--color-light);
@media screen and (max-width:1024px ){
    margin: 1rem 0 1.5rem; 
}
`
export const StyledAboutcontentdiv = styled.div`
text-align: center;
`

export const StyledAboutcards = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1.5rem;
@media screen and (max-width:600px ){
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

}
`
export const StyledAboutcard = styled.article`
background-color: var(--color-bg-variant);
border: 1px solid transparent;
border-radius: 1rem;
padding: 2rem;
text-align: center;
&:hover {
    background:transparent ;
    border-color: var(--color-primary-variant);
    cursor: default;
}
`
export const StyledAbouticon = styled.div`
color: var(--color-primary);
font-size: 1.4rem;
margin-bottom: 1rem;
`
export const StyledAboutsmall = styled.small`
font-size: 0.7rem;
color: var(--color-light);
`