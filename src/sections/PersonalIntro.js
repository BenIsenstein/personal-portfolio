import styled from 'styled-components'
import { deviceMedia, personalIntroFadeIn } from '../resources'
import { PhotoGallery, NewSectionWithHr } from '../components'

const PersonalIntroWrapper = styled(NewSectionWithHr)`
  margin-top: 1em;  
  align-items: center;  
  animation: ${personalIntroFadeIn} 4.5s;

  ${deviceMedia.tablet} {
    margin-top: 4em;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  ${deviceMedia.laptop} { 
    animation: ${personalIntroFadeIn} 5.5s; 
  }
`

const PersonalIntroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  width: 100%;


  ${deviceMedia.mobileM} {
    
  }

  ${deviceMedia.mobileL} {
    
  }

  ${deviceMedia.tablet} {
    margin-bottom: 0;
    width: 50%;
    
  }

  ${deviceMedia.laptop} {
    
  }

  ${deviceMedia.laptopL} {
    
  }

  ${deviceMedia.desktop} {
    
  } 

`

const PersonalIntroParagraph = styled.p`
  text-align: center;

  ${deviceMedia.mobileM} {
    
  }

  ${deviceMedia.mobileL} {
    
  }

  ${deviceMedia.tablet} {
    
  }

  ${deviceMedia.laptop} {
    
  }

  ${deviceMedia.laptopL} {
    
  }

  ${deviceMedia.desktop} {
    
  } 

`

const PersonalIntro = () => <PersonalIntroWrapper> 
  <PersonalIntroText>
    <PersonalIntroParagraph>Interests, inspirations, bio. More interests, inspirations, bio.</PersonalIntroParagraph>
    <PersonalIntroParagraph>Interests, inspirations, bio. More interests, inspirations, bio.</PersonalIntroParagraph>
    <PersonalIntroParagraph>Interests, inspirations, bio. More interests, inspirations, bio.</PersonalIntroParagraph>
  </PersonalIntroText>
  <PhotoGallery />
</PersonalIntroWrapper>

export { PersonalIntro }