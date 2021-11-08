import styled from "styled-components"
import { deviceMedia } from "../resources"

const PhotoGallery = styled.div`
  background: red;
  border: 4px solid red;
  border-radius: 10px;
  margin: 0;
  width: 90vw;
  height: 135vw;

  ${deviceMedia.mobileM} {
    
  }
  
  ${deviceMedia.mobileL} {
    
  }
  
  ${deviceMedia.tablet} {
    width: 16em;
    height: 24em;
  }
  
  ${deviceMedia.laptop} {
    
  }
  
  ${deviceMedia.laptopL} {
    
  }
  
  ${deviceMedia.desktop} {
    
  }   
`

export { PhotoGallery }