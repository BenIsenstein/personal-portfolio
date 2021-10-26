import styled from "styled-components"
import BenHeadshot from '../HeadshotMay22Cropped.png'

const TitleSection = styled.div`
  display: flex;
  width: 100%;
  max-height: 300px;
  overfow: hidden;
  

`

const HeadshotContainer = styled.img`
  height: 24em;
  width: 24em;
  border: 5px solid antiquewhite;
  border-radius: 50%;
  margin-right: 1em;
`

const TitleText = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  

`

const TitleTextBox = styled.div`
  display: flex;
  flex-direction: column;

  
`

const Name = styled.h1`
  margin: 0;
  font-size: 6em;

  @media (max-width: 800px) {
    font-size: 2.5em;
  } 

`

const PersonalTitles = styled.h2`
  margin: 0;
  font-size: 2.5em;

  @media (max-width: 800px) {
    font-size: 1.5em;
  }

`

const TitleSectionLinks = styled.div`
  display: flex;

`

const TitleSectionLink = styled.a`
  margin-right: 1em;
  color: black;
  text-decoration: underline transparent;
  transition-property: font-size, color, text-decoration;
  transition-duration: 0.4s;

  &:hover {
    color: lightblue;
    font-size: 1.2em;
    text-decoration: underline antiquewhite;
  }


`



const MyHeadshot = () => <HeadshotContainer src={BenHeadshot} />







export {
  TitleSection,
  TitleText,
  TitleTextBox,
  MyHeadshot,
  Name,
  PersonalTitles,
  TitleSectionLinks,
  TitleSectionLink
}