import styled from "styled-components";

export const CardContainer = styled.article`
    padding: 2rem;
    width: 100%;
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    transition: .5s transform;

    &:hover {
        transform: translate(5px, -5px);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    }

    & > p {
        overflow: hidden;
        text-overflow: ellipsis;

        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;

        color: ${props => props.theme["base-text"]};
    }
`

export const CardHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    & > strong {
        flex: 1;
        font-size: 1.25rem;
        font-weight: 700;
        color: ${props => props.theme["base-title"]};
        line-height: 160%;
    }

    & > time {
        color: ${props => props.theme["base-span"]};
        font-size: .875rem;
        line-height: 160%;
    }
`