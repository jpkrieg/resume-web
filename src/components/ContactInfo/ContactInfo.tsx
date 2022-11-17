import React from 'react';
import styles from './ContactInfo.module.scss';

import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <div className={styles.contactInfo__lineItem}>
                <EmailIcon sx={{color: "#3498DB"}}/>
                jpk806@gmail.com
            </div>
            <div className={styles.contactInfo__lineItem}>
                <PlaceIcon sx={{color: "#3498DB"}}/>
                3345 Oakhill Place, Clarkston, MI 48348
            </div>
            <div className={styles.contactInfo__lineItem}>
                <CallIcon sx={{color: "#3498DB"}}/>
                +1 (586) 747-1401
            </div>
        </div>
    )
}

export default ContactInfo;