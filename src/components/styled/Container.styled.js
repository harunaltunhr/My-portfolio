import styled from "styled-components";

export const StyledContainer = styled.div`
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
