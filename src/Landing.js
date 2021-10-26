import { 
    MyHeadshot, 
    TitleSection, 
    TitleText, 
    TitleTextBox,
    Name, 
    PersonalTitles,
    TitleSectionLinks,
    TitleSectionLink 

} from './components'

const Landing = () => <>
  <TitleSection>
    <MyHeadshot />
    <TitleText>
      <TitleTextBox>
        <Name>Ben Isenstein</Name>
        <PersonalTitles>Web Developer, Creative</PersonalTitles>
        <TitleSectionLinks>
          <TitleSectionLink href="">Resume</TitleSectionLink>
          <TitleSectionLink href="">Github</TitleSectionLink>
          <TitleSectionLink href="">LinkedIn</TitleSectionLink>
          <TitleSectionLink href="">Email</TitleSectionLink>
  
        </TitleSectionLinks>
      </TitleTextBox>
      
    </TitleText>
  </TitleSection>
</>

export default Landing