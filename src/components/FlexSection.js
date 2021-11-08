import styled, {css} from 'styled-components'

const FlexSection = styled.div`
    display: flex;
    align-items: center;
    transition: max-height 0.4s;

    ${props => props.alignStart && css`
        align-items: flex-start;
    `}

    ${props => props.alignCenter && css`
        align-items: center;
    `}

    ${props => props.alignEnd && css`
        align-items: flex-end;
    `}

    ${props => props.column && css`
        flex-direction: column;
    `}

    ${props => props.rowReverse && css`
        flex-direction: row-reverse;
    `}

    ${props => props.justifyCenter && css`
        justify-content: center;
    `}

    ${props => props.justifyEnd && css`
        justify-content: flex-end;
    `}

    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}

    ${props => props.spaceEvenly && css`
        justify-content: space-evenly;
    `}

    ${props => props.fullWidth && css`
        width: 100%;
    `}

    ${props => props.fullHeight && css`
        height: 100%;
    `}

    ${props => props.marginTop1em && css`
        margin-top: 1em;
    `}

    ${props => props.marginTop && css`
        margin-top: ${props.marginTop};
    `}

    ${props => props.margin && css`
        margin: ${props.margin};
    `}

    ${props => props.padding && css`
        padding: ${props.padding};
    `}

    ${props => props.backgroundColor && css`
        background-color: ${props.backgroundColor};
    `}

    ${props => props.popup && css`
        overflow: hidden;
        max-height: ${props => props.popupCondition ? '100%' : '0'};
    `}

    ${props => props.extraCss && css`${props.extraCss(props)}`}



    @media (min-width: ${props => props.theme.smScreen}) {
        ${props => props.gridColumn && css`
        grid-column: ${props.gridColumn};
        `}
    }
`

export {FlexSection}