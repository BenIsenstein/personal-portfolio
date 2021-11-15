import styled from 'styled-components'

const Hr = styled.hr`
  width: 70%;
  margin: ${props => props.margin || '4em 0 0 0'};
  align-self: center;
  border: 1px solid darkslategrey;
`

export { Hr }