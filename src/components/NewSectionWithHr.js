import styled from 'styled-components'
import { Hr } from '.'

const NewSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const NewSectionWithHr = ({ className, children }) => <>
  <Hr />
  <NewSectionWrapper className={className}>
    {children}
  </NewSectionWrapper>
</>

export { NewSectionWithHr }

