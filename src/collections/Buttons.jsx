import styled, { css } from "styled-components";



export const PrimaryButtonStyle = css`
    display: block;
    padding: 1rem 1.2rem;
    border-radius: 12px;
    font-weight: bold;
    font-size:1.2em;
    text-align: center;
    text-transform: uppercase;
    background-color: #074dff;
    color:#fff;
    cursor:pointer;
`

export const SecondaryButtonStyle =css`
    display: block;
    padding: 1rem 1.2rem;
    border-radius: 12px;
    border: 0;
    font-weight: bold;
    font-size:1.2em;
    text-align: center;
    text-transform: uppercase;
    text-decoration:underline;
    background-color: transparent;
    color:inherit;
`

export const LinkPrimaryButton = styled.a`
    ${PrimaryButtonStyle}
`
export const PrimaryButton = styled.button`
    ${PrimaryButtonStyle}
`

export const LinkSecondaryButton = styled.a`
    ${SecondaryButtonStyle}
`
export const SecondaryButton = styled.button`
    ${SecondaryButtonStyle}
`