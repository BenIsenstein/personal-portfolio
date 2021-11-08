import styled from "styled-components"
import { useState } from 'react'
import ultralightCopy from 'copy-to-clipboard-ultralight'
import { useResumeModal, NewTabLink } from "../components"
import { headshotSlideInLeft, titleTextSlideInRight, deviceMedia, copiedMessageSlideUp } from '../resources'
import BenHeadshot from '../images/HeadshotMay22Cropped.png'

const TitleSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 4em;
  overflow-x: visible;

  ${deviceMedia.tablet} { flex-direction: row; }
`

const HeadshotContainer = styled.img`
  height: 16em;
  width: 16em;
  border: 5px solid antiquewhite;
  border-radius: 50%;
  animation: ${headshotSlideInLeft} 2s;

  ${deviceMedia.mobileM} {
    height: 18em;
    width: 18em;
  }

  ${deviceMedia.mobileL} {
    height: 20em;
    width: 20em;
  }

  ${deviceMedia.tablet} {
    margin-right: 1em;
  }

  ${deviceMedia.laptop} {
    height: 22em;
    width: 22em;
  }

  ${deviceMedia.laptopL} {
    margin-top: 2em;
    margin-left: 2em;
    height: 28em;
    width: 28em;
  }

  ${deviceMedia.desktop} {
    margin-top: 4em;
    margin-left: 4em;
    height: 48em;
    width: 48em;
  }  
`

const TitleTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  ${deviceMedia.tablet} { align-items: flex-start; }
`

const Name = styled.h1`
  margin: 0;
  font-size: 2.8em;
  animation: ${titleTextSlideInRight} 2s;
  
  ${deviceMedia.mobileM} { font-size: 3.4em; }

  ${deviceMedia.mobileL} { font-size: 3.9em; }

  ${deviceMedia.laptop} { font-size: 6em; }

  ${deviceMedia.laptopL} { font-size: 8em; }

  ${deviceMedia.desktop} { font-size: 16em; }
`

const PersonalTitles = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  margin: 0;
  font-size: 1.4em;
  border: 1px dashed black;
  border-radius: 4px;
  padding: 0.5em;
  animation: ${titleTextSlideInRight} 2.2s;

  ${deviceMedia.mobileM} { font-size: 1.6em; }

  ${deviceMedia.mobileL} { font-size: 2em; }

  ${deviceMedia.laptop} { font-size: 2.6em; }

  ${deviceMedia.laptopL} {
    font-size: 3em;
    border-radius: 8px;
  }

  ${deviceMedia.desktop} {
    font-size: 5em;
    border: 2px dashed black;
  } 
`

const PersonalTitle = styled.h2`
  margin: 0;
  font-size: inherit;
`

const TitleSectionLinks = styled.div`
  position: relative;
  display: flex;
  background: darkslategrey;
  border-radius: 4px;
  width: max-content;
  margin-top: 1em;
  animation: ${titleTextSlideInRight} 2.4s;
  transition: margin-top 0.4s;

  a,p { 
    padding: 0 0.5em;
    margin: 0;
    font-size: 0.9em;
    color: lightblue;
    text-decoration: underline lightblue;

    &:hover { cursor: pointer; }
  }

  ${deviceMedia.mobileM} {
    a,p { font-size: 1em; }
  }

  ${deviceMedia.mobileL} {
    a,p { font-size: 1.3em; }
  }

  ${deviceMedia.laptop} {
    &:hover {
      margin-top: 0.8em;
    }

    a,p {
      color: antiquewhite;
      font-size: 1.65em;
      text-decoration: underline transparent;
      transition-property: font-size, color, text-decoration;
      transition-duration: 0.4s;

      &:hover {
        font-size: 1.8em;
        color: lightblue;
        text-decoration: underline lightblue;
      }
    }
  }

  ${deviceMedia.laptopL} {
    border-radius: 6px;

    a,p { 
      font-size: 1.9em; 

      &:hover {
        font-size: 2.1em;
      }
    }
  }

  ${deviceMedia.desktop} {
    border-radius: 8px;

    a,p { 
      font-size: 3.2em; 

      &:hover {
        font-size: 3.5em;
      }
    }
  } 
`

const CopiedMessage = styled.div`
  position: absolute;
  align-self: center;
  margin: 0;
  right: -3.7em;
  font-size: 0.6em;
  color: darkred;
  animation: ${copiedMessageSlideUp} 2s;

  ${deviceMedia.mobileM} { 
    font-size: 0.8em; 
  }

  ${deviceMedia.mobileL} { 
    font-size: 0.6em; 
  }

  ${deviceMedia.tablet} { 
    font-size: 0.8em; 
  }

  ${deviceMedia.laptop} { 
    right: -4em;
    font-size: 1em; 
  }

  ${deviceMedia.laptopL} {
    font-size: 1.4em;
  }

  ${deviceMedia.desktop} {
    font-size: 2em;
  } 
`

const TitleSection = () => {
  const [showCopied, setShowCopied] = useState(false)
  const { ResumeModal, toggleResume } = useResumeModal()

  const copyEmail = () => {
    if (ultralightCopy('ben.isenstein@gmail.com')) {
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 1600)
    }
  }

  return <TitleSectionWrapper>
    <HeadshotContainer src={BenHeadshot} />
    <TitleTextWrapper>
      <TitleTextBox>
        <Name>Ben Isenstein</Name>
        <PersonalTitles>
          <PersonalTitle>Full Stack Developer</PersonalTitle>
          <PersonalTitle>Project Manager</PersonalTitle>
          <PersonalTitle>Agile Team Member</PersonalTitle>
        </PersonalTitles>
        <TitleSectionLinks>
          <p onClick={toggleResume}>Resume</p> <ResumeModal />
          <NewTabLink href="https://github.com/BenIsenstein">Github</NewTabLink>
          <NewTabLink href="https://www.linkedin.com/in/benisenstein/">LinkedIn</NewTabLink>
          <p onClick={copyEmail}>Email</p>
          {showCopied && <CopiedMessage>Copied</CopiedMessage>}
        </TitleSectionLinks>
      </TitleTextBox>
    </TitleTextWrapper>
  </TitleSectionWrapper>
}

export { TitleSection }