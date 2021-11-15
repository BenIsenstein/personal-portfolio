import styled from 'styled-components'
import { NewSectionWithHr, SectionHeading, RowOfIcons } from '../components'
import { deviceMedia } from '../resources'

const HowThisSiteWasBuiltWrapper = styled(NewSectionWithHr)`
  align-items: center;
`

const HowThisSiteWasBuilt = () => <HowThisSiteWasBuiltWrapper>
    <SectionHeading>How This Site Was Built</SectionHeading>
</HowThisSiteWasBuiltWrapper>

export { HowThisSiteWasBuilt }