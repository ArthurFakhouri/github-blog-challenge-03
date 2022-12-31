import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    height: 18.5rem;
    overflow: hidden;

    background: radial-gradient(ellipse at bottom, 
        #14589c6e, 
        ${props => props.theme["base-profile"]} 75%,
        #14589c30);
    z-index: -1;
`

export const LogoContainer = styled.div`
    position: absolute;
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
`

export const Effects = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    & > img {
        object-fit: cover;
        margin-top: 4.375rem;
    }

    & > img:first-child {
        margin-top: 1.875rem;
    }
`