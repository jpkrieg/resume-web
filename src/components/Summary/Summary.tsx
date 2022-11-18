import styles from './Summary.module.scss';
import React from 'react';
import { ISummary } from '../../model/model';

const Summary: React.FC<ISummary> = ({title, subtitle, summary}) => {
    return (
        <div className={styles.summary}>
            <div className={styles.summary__title}>{title}</div>
            <div className={styles.summary__subtitle}>{subtitle}</div>
            <hr />
            <div className={styles.summary__content}>
                {summary}
            </div>
        </div>
    )
}

export default Summary;