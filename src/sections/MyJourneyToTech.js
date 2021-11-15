import styled from 'styled-components'
import { NewSectionWithHr, SectionHeading, RowOfIcons } from '../components'
import { deviceMedia, Mongodb, Express, ReactLogo, Node } from '../resources'
import inceptionULogoUrl from '../images/InceptionULogo.png'


const JourneyToTechWrapper = styled(NewSectionWithHr)`
  align-items: center;
`

const InceptionULogo = styled.img`
  height: 5em;
  aspect-ratio: 3/2;
  border: 5px solid antiquewhite;
  border-radius: 10%;
  
  ${deviceMedia.mobileM} { height: 6em; }
  
  ${deviceMedia.mobileL} { height: 7em; }
  
  ${deviceMedia.tablet} {}
  
  ${deviceMedia.laptop} { height: 8em; }
  
  ${deviceMedia.laptopL} { height: 9em; }
  
  ${deviceMedia.desktop} { height: 16em; }  
`

const JourneyToTechParagraph = styled.p`

`

const MyJourneyToTech = () => <JourneyToTechWrapper>
    <SectionHeading>My Journey To Tech</SectionHeading>
    <InceptionULogo src={inceptionULogoUrl} />
    <JourneyToTechParagraph>
        First Paragraph
    </JourneyToTechParagraph>
    <RowOfIcons icons={[Mongodb, Express, ReactLogo, Node]} />
    <JourneyToTechParagraph>
        Second Paragraph
    </JourneyToTechParagraph>
    <JourneyToTechParagraph>
        Third Paragraph
    </JourneyToTechParagraph>
</JourneyToTechWrapper>


export { MyJourneyToTech }