import { useState, useMemo } from 'react'
import styled from "styled-components"
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline'
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'
import { deviceMedia } from "../resources"
import butterflyStock from '../images/butterfly-stock.jpg'
import flowersStock from '../images/flowers-stock.jpg'
import mountainStock from '../images/mountain-stock.jpg'
import treesFogStock from '../images/trees-fog-stock.jpg'
import winterStock from '../images/winter-stock.jpg'

const PhotoGalleryWrapper = styled.div`
  position: relative;
  //background: antiquewhite;
  border: 4px solid antiquewhite;
  border-radius: 10px;
  margin: 0;
  width: 90vw;
  height: 135vw;
  //overflow: hidden;

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

const PhotoGalleryPhoto = styled.img`
  position: absolute;
  //top: -1px;
  left: -1px;
  border-radius: 7px;   
  width: calc(100% + 2px);
  height: calc(100% + 1px);
`

const PhotoGalleryNavBar = styled.div`
  position: absolute;
  bottom: -1px;
  left: -1px;
  display: flex;
  align-items: center;
  width: calc(100% + 2px);
  height: 15%;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  background: rgba(47,79,79, 0.8);
`

const BackNavArrow = styled(ArrowIosBackOutline)`
  position: absolute;
  left: 1em;
  color: antiquewhite;
  opacity: 80%;
  height: 50%;

  &:hover {
    opacity: 100%;
  }

  &:active {
    height: 55%;
    opacity: 100%;
  }
`

const ForwardNavArrow = styled(ArrowIosForwardOutline)`
  position: absolute;
  right: 1em;
  color: antiquewhite;
  opacity: 80%;
  height: 50%;

  &:hover {
    opacity: 100%;
  }

  &:active {
    height: 55%;
    opacity: 100%;
  }
`

const PhotoGallery = () => {
  const imagesArray = useMemo(() => [
    { src: butterflyStock, alt: "Alt text" },
    { src: flowersStock, alt: "Alt text" },
    { src: winterStock, alt: "Alt text" },
    { src: treesFogStock, alt: "Alt text" },
    { src: mountainStock, alt: "Alt text" }
  ], [])
  const [image, setImage] = useState(imagesArray[0])
  
  const viewPreviousImage = () => setImage(currImage => {
    let currIndex = imagesArray.findIndex(image => image.src === currImage.src)
    let nextIndex = currIndex === 0 ? imagesArray.length - 1 : currIndex - 1
    
    return imagesArray[nextIndex]
  })

  const viewNextImage = () => setImage(currImage => {
    let currIndex = imagesArray.findIndex(image => image.src === currImage.src)
    let nextIndex = currIndex === imagesArray.length - 1 ? 0 : currIndex + 1
    
    return imagesArray[nextIndex]
  })

  return <PhotoGalleryWrapper>
    <PhotoGalleryPhoto loading='eager' src={image.src} alt={image.alt} />
    <PhotoGalleryNavBar>
      <BackNavArrow onClick={viewPreviousImage} />
      <ForwardNavArrow onClick={viewNextImage} />
    </PhotoGalleryNavBar>
  </PhotoGalleryWrapper>
}




export { PhotoGalleryWrapper, PhotoGallery }