import styled from "styled-components";

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`