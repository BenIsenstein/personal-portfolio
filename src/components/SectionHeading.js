import styles from '../styles/SectionHeading.module.css'

const SectionHeading = ({ children }) => (
  <h2 className={styles.sectionHeading}>
    {children}
  </h2>
)

export { SectionHeading }