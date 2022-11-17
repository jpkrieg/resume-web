import styles from './Section.module.scss';
import React, { ReactNode } from 'react'

interface ISectionProps {
    title: string;
    children?: ReactNode;
}

const Section: React.FC<ISectionProps> = ({title, children}) => {
  return (
    <div className={styles.section}>
        <div className={styles.section__title}>{title}</div>
        <hr />
        <div className={styles.section__children}>
          {children}
        </div>
    </div>
  )
}

export default Section