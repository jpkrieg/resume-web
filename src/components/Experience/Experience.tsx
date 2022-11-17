import React from 'react';
import { IExperience } from '../../data';
import LocationAndDates from '../LocationAndDates/LocationAndDates';
import styles from './Experience.module.scss';

const Experience: React.FC<IExperience> = ({
    institution,
    location,
    subtitle,
    dates,
    description,
    descriptionList
}) => {
    console.log(descriptionList)
    return (
        <div className={styles.experience}>
            <div className={styles.experience__headerRow}>
                <div className={styles.experience__headerRow__titleAndSubtitles}>
                    <div className={styles.experience__headerRow__titleAndSubtitles__institution}>{institution}</div>
                    <div>{subtitle}</div>
                </div>
                <LocationAndDates
                    location={location}
                    dates={dates}
                />
            </div>
            <div className={styles.experience__description}>
                <>
                    {description}
                    {descriptionList &&
                        <ul className={styles.ul__outer}>
                            {descriptionList.map((d) => {
                                return (
                                    <>
                                        <li className={styles.li}>{d.label}</li>
                                        {d.children &&
                                            <ul className={styles.ul__inner}>
                                                {d.children.map((child) => <li className={styles.li}>{child.label}</li>)}
                                            </ul>
                                        }
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