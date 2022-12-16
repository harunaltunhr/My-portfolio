import styled from "styled-components";

export const StyledHeader = styled.header`
height: 100vh;
margin-top: 7rem;
overflow:  hidden;
`
export const StyledContainerheader = styled.div`
text-align:  center;
height: 100%;
position: relative;
`

export const StyledScroll = styled.a`
position: absolute;
display: block;
gap: 1.2rem;
justify-content: center;
color: var(--color-primary);
transition: var(--transition);
    right: -1.3rem;
    bottom: 10rem;
    transform: rotate(90deg);
    // font-weight: 300;
    font-size: 0.9rem;
&:hover {
        color: var(--color-white);
    }
@media screen and (max-width:600px ){
             display: none;
        }
`
export const StyledLogo = styled.img`
display: block;

height: auto;
object-fit: cover;
width: 20rem;
text-align: center;
margin: auto;
`

export const StyledHeaderPhoto = styled.div
    `
background: linear-gradient(var(--color-primary),transparent);
width: 22rem;
height: 30rem;
position: absolute;
left: calc(50% - 11rem);
margin-top: 4rem;
border-radius: 12rem 12rem 0 0;
overflow: hidden;
padding: 5rem 1.5rem 1.5rem 1.5rem
`
export const StyledSocialMedias = styled.div
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 7rem;
    &:after{
        content: "";
        width: 1px;
        height: 2rem;
        background: var(--color-primary);
        }
        @media screen and (max-width:600px ){
            display: none;
        }   
`