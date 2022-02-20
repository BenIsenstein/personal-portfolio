import styled, { css } from 'styled-components'
import { deviceMedia } from '../resources'
import { RowOfIcons, NewSectionWithHr } from '.'

const DevExampleContainer = styled(NewSectionWithHr)`
  flex-direction: ${props => props.flexDirection || 'column'};
`

const DevExampleHeader = styled.h2`

`

const DevExampleMainImage = styled.img`

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

const TechContainer = styled.div`

`

const TechHeader = styled.h3`
  
`

const TechDisplay = props => <TechContainer>
  <TechHeader>Tech:</TechHeader>
  <RowOfIcons icons={[props.icons]} /> 
</TechContainer>


const DevExampleMainText = styled.p`

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

const DevelopmentExample = props => <DevExampleContainer>
  <DevExampleHeader>{props.mainHeader}</DevExampleHeader>
  <DevExampleMainImage src={props.mainImageSrc} />
  <TechDisplay icons={props.icons} />
  <DevExampleMainText>{props.mainText}</DevExampleMainText>
</DevExampleContainer>

export { DevelopmentExample }