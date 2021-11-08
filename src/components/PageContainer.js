import styled, {css} from 'styled-components'

const PageContainer = styled.div`
    min-height: 90vh;
    margin: 0 0 1.4em 0;
    padding: 1em;
    border-radius: 10px;
    overflow-x: visible;

    ${props => props.flexColumn && css`
        display: flex;
        flex-direction: column;
    `}

    ${props => props.centerPage && css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
    
    ${props => props.mockMobileView && css`
        min-height: 80vh;
    `}      

    ${props => props.extraCss && css`${props.extraCss(props)}`}

    @media (min-width: ${props => props.theme.smScreen}) {
        width: 90%;
        padding: 1.4em;
    }
`

export {PageContainer}