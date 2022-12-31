import styled from "styled-components";


export const ProfileContainer = styled.div`
    padding: 2rem 2.5rem;
    gap: 2rem;
    background: ${props => props.theme["base-profile"]};
    display: flex;
    border-radius: 10px;
    box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.2);
`

export const Avatar = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
`

export const Data = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-wrap: break-word;
    
    & > strong, & > a {
        font-weight: 700;
    }

    & > strong {
        flex: 1;
        font-size: 1.5rem;
        color: ${props => props.theme["base-title"]};
        line-height: 130%;
    }

    & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;

        font-size: .75rem;
        text-decoration: none;
        color: ${props => props.theme.blue};
        line-height: 160%;
        text-transform: uppercase;

        &:hover{
            border-bottom: solid 1px ${props => props.theme.blue};
            margin-bottom: -1px;
        }
    }
`

export const Bio = styled.p`
    line-height: 160%;
    height: 3.25rem;
    max-height: 3.25rem;
    color: ${props => props.theme["base-text"]};
    margin: .5rem 0 1.5rem;
`

export const Info = styled.div`
    display: flex;
    gap: 1.5rem;

    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        
        line-height: 160%;
        color: ${props => props.theme["base-subtitle"]};

        & > svg{
            color: ${props => props.theme["base-label"]};
        }
    }
`