import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: block;
`

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    margin: calc(0px - 5rem) .5rem 0;

    @media only screen and (min-width: 1440px) {
        margin-left: 18rem;
        margin-right: 18rem;
    }
`