import styled from 'styled-components'
import { NewSectionWithHr, SectionHeading, RowOfIcons } from '../components'
import { deviceMedia, ReactLogo, Node, Styledcomponents, Github, Githubpages, Visualstudiocode } from '../resources'

const HowThisSiteWasBuiltWrapper = styled(NewSectionWithHr)`
  align-items: center;
`

const HowItWasBuiltParagraph = styled.p`

`

const HowThisSiteWasBuilt = () => <HowThisSiteWasBuiltWrapper>
  <SectionHeading>How This Site Was Built</SectionHeading>
  <HowItWasBuiltParagraph>I used Visual Studio Code, NodeJs, React, Styled-Components, Github, and Github Pages.</HowItWasBuiltParagraph>
  <RowOfIcons icons={[Visualstudiocode, Node, ReactLogo, Styledcomponents, Github, Githubpages]} />
</HowThisSiteWasBuiltWrapper>

export { HowThisSiteWasBuilt }