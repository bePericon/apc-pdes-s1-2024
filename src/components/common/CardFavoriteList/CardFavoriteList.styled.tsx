import styled, { css } from 'styled-components'

export const StyledCategoryCard = styled.div`
    width: 100%;
    min-height: 72px;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.boxShadows.whiteS};
    background-color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #faf0ca;
        outline: none;
    }

    &.focused {
        background-color: #fff;
        outline: none;
    }

    ${({ theme }) => {
        return css`
            @media screen and (max-width: ${theme.breakpoints.s}) {
                justify-content: center;
                width: 90%;
                height: auto;
                min-height: 52px;
                padding: 8px;
            }
        `
    }}
`

export const StyledCategoryCardInner = styled.div`
    display: flex;
`

export const StyledButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-width: 500px;
    max-width: 500px;
    padding-top: 4px;

    [role='heading'] {
        line-height: 1.43;
        letter-spacing: normal;
    }

    ${({ theme }) => {
        return css`
            @media screen and (max-width: ${theme.breakpoints.s}) {
                min-height: auto;
            }

            @media screen and (max-width: ${theme.breakpoints.s}) {
                min-width: 180px;
            }
        `
    }}
`

export const StyledFirstIcon = styled.div`
    align-self: flex-start;
    margin-right: 8px;
`

export const StyledRenderIcon = styled.div`
    align-self: flex-start;
`

export const StyledLastIcon = styled.div`
    align-self: center;
`