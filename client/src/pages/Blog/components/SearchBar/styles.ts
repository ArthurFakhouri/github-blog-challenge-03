import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;

    margin: 4.5rem 0 3rem;

    & > input {
        background-color: ${props => props.theme["base-input"]};
        border: solid 1px ${props => props.theme["base-border"]};
        color: ${props => props.theme["base-text"]};
        border-radius: 6px;
        padding: .75rem 1rem;

        ::placeholder{
            color: ${props => props.theme["base-label"]};
        }

        &:focus {
            border-color: ${props => props.theme.blue};
        }
    }
`

export const Publications = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > strong {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 160%;
    }

    & > span {
        color: ${props => props.theme["base-span"]};
        font-size: .875rem;
        line-height: 160%;
    }
`