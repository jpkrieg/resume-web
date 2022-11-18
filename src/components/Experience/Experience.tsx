import styles from './Experience.module.scss';
import React from 'react';
import { IExperience } from '../../model/model';
import LocationAndDates from '../LocationAndDates/LocationAndDates';

const Experience: React.FC<IExperience> = ({
    title: institution,
    location,
    subtitle,
    dates,
    description,
    bulletpoints
}) => {
    console.log(bulletpoints)
    return (
        <div className={styles.experience}>
            <div className={styles.experience__headerRow}>
                <div className={styles.experience__headerRow__titleAndSubtitles}>
                    <div className={styles.experience__headerRow__titleAndSubtitles__title}>{institution}</div>
                    <div className={styles.experience__headerRow__titleAndSubtitles__subtitle}>{subtitle}</div>
                </div>
                <LocationAndDates
                    location={location}
                    dates={dates}
                />
            </div>
            <div className={styles.experience__description}>
                <>
                    {description}
                    {bulletpoints &&
                        <ul className={styles.ul__outer}>
                            {bulletpoints.map((bulletpoint) => {
                                return (
                                    <>
                                        <li className={styles.li}>{bulletpoint}</li>
                                    </>
                                )
                            })}
                        </ul>
                    }
                </>
            </div>
        </div>
    )
}

export default Experience;