import React from 'react';
import styles from './LocationAndDates.module.scss';

interface ILocationAndDatesProps {
    location: string;
    dates: string;
}

const LocationAndDates: React.FC<ILocationAndDatesProps> = ({location, dates}) => {
  return (
    <div className={styles.locationAndDates}>
        <div>{location}</div>
        <div>{dates}</div>
    </div>
  )
}

export default LocationAndDates