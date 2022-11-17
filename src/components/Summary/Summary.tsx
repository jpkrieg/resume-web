import React from 'react';
import styles from './Summary.module.scss';
import data from '../../data';

const summary = data.summary;

const Summary = () => {
    return (
        <div className={styles.summary}>
            <div className={styles.summary__title}>{summary.title}</div>
            <div className={styles.summary__subtitle}>{summary.subtitle}</div>
            <hr />
            <div className={styles.summary__content}>
                {summary.summary}
            </div>
        </div>
    )
}

export default Summary;