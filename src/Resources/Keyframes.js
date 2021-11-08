import { keyframes } from 'styled-components';

const slideInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0.8em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-0.8em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const headshotSlideInLeft = keyframes`
  0% {
    
    transform: translateX(-40vw);
  }
  100% {
    
    transform: translateX(0);
}
`

const titleTextSlideInRight = keyframes`
  0% {
    visibility: hidden;
    transform: translateX(60vw);
  }
  50% {
    visibility: hidden;
    transform: translateX(60vw);
  }
  100% {
    visibility: visible;
    transform: translateX(0);
}
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const copiedMessageSlideUp = keyframes`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-4em);
  }
`

export {
  slideInTop, 
  slideInBottom, 
  fadeIn, 
  headshotSlideInLeft, 
  titleTextSlideInRight,
  copiedMessageSlideUp
}