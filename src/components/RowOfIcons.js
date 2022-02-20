import styled from 'styled-components'
import { deviceMedia } from '../resources'
import styles from '../styles/RowOfIcons.module.css'

const makeStyledIcon = Icon => styled(props => <Icon {...props} />)`
  aspect-ratio: 1;
  height: 2.6em;
  margin: 0 0.5em 0 0.5em;

  ${deviceMedia.mobileM} { height: 2.8em; }
  
  ${deviceMedia.mobileL} { height: 3em; }
  
  ${deviceMedia.tablet} { height: 4em; }
  
  ${deviceMedia.laptop} {}
  
  ${deviceMedia.laptopL} { height: 6em; }
  
  ${deviceMedia.desktop} { height: 9em; }    
`

const RowOfIcons = ({ icons }) => <div className={styles.rowForIcons}>
  {icons
    .map(Icon => makeStyledIcon(Icon))
    .map(StyledIcon => <StyledIcon key={StyledIcon.name} />)
  }
</div>

export { RowOfIcons }