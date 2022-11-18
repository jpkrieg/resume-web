import React from 'react';
import styles from './ContactInfo.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import { IContactInfo } from '../../model/model';

const ContactInfo: React.FC<IContactInfo> = ({email, phone, address}) => {
    return (
        <div className={styles.contactInfo}>
            <div className={styles.contactInfo__lineItem}>
                <EmailIcon sx={{color: "#3498DB"}}/>
                {email}
            </div>
            <div className={styles.contactInfo__lineItem}>
                <PlaceIcon sx={{color: "#3498DB"}}/>
                {address}
            </div>
            <div className={styles.contactInfo__lineItem}>
                <CallIcon sx={{color: "#3498DB"}}/>
                {phone}
            </div>
        </div>
    )
}

export default ContactInfo;