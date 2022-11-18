import React from 'react';
import { ILocationAndDates } from '../../model/model';
import styles from './LocationAndDates.module.scss';

const LocationAndDates: React.FC<ILocationAndDates> = ({location, dates}) => {
  return (
    <div className={styles.locationAndDates}>
        <div>{location}</div>
        <div>{dates}</div>
    </div>
  )
}

export default LocationAndDates