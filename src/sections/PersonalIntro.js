import styled from 'styled-components'
import { deviceMedia, personalIntroFadeIn } from '../resources'
import { PhotoGallery, Hr } from '../components'

const PersonalIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  animation: ${personalIntroFadeIn} 4.5s;

  ${deviceMedia.laptop} { 
    animation: ${personalIntroFadeIn} 5.5s; 
  }
`

const PersonalIntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 4em 0 0 0;
  
  ${deviceMedia.mobileM} {
    
  }

  ${deviceMedia.mobileL} {
    
  }

  ${deviceMedia.tablet} {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    
  }

  ${deviceMedia.laptop} {
    
  }

  ${deviceMedia.laptopL} {
    
  }

  ${deviceMedia.desktop} {
    
  }  

`

const PersonalIntroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;


  ${deviceMedia.mobileM} {
    
  }

  ${deviceMedia.mobileL} {
    
  }

  ${deviceMedia.tablet} {
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
  <Hr />  
  <PersonalIntroContent>
      <PersonalIntroText>
        <PersonalIntroParagraph>Interests, inspirations, bio. More interests, inspirations, bio.</PersonalIntroParagraph>
        <PersonalIntroParagraph>Interests, inspirations, bio. More interests, inspirations, bio.</PersonalIntroParagraph>
        <PersonalIntroParagraph>Interests, inspirations, bio. More interests, inspirations, bio.</PersonalIntroParagraph>
      </PersonalIntroText>
      <PhotoGallery />
  </PersonalIntroContent>
</PersonalIntroWrapper>

export { PersonalIntro }