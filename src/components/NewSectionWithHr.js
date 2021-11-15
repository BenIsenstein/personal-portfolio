import styled from 'styled-components'
import { Hr } from '.'

const NewSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const NewSectionWithHr = ({ className, children, hrMargin }) => <>
  <Hr margin={hrMargin} />
  <NewSectionWrapper className={className}>
    {children}
  </NewSectionWrapper>
</>

export { NewSectionWithHr }

