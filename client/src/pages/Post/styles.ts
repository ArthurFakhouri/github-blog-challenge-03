import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.2);

    & > strong {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 130%;
        color: ${props => props.theme["base-title"]};
        margin: 1.25rem 0 .5rem;
    }
`

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;

    & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        font-size: .75rem;
        color: ${props => props.theme.blue};

        &:hover{
            cursor: pointer;
            border-bottom: solid 1px ${props => props.theme.blue};
            margin-bottom: -1px;
        }
    }
`

export const Infos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    & > span {
        color: ${props => props.theme["base-span"]};
        line-height: 160%;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
    }
`

export const BodyIssue = styled.div`
    padding: 2.5rem 2rem;
    color: ${props => props.theme["base-text"]};

    & a {
        color: ${props => props.theme.blue};
        text-decoration: underline;
    }

    & p {
        margin: 1rem 0;
    }
`