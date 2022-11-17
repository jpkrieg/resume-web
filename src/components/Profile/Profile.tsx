import React from 'react'
import ContactInfo from '../ContactInfo/ContactInfo'
import Headline from './Headline/Headline'

const Profile = () => {
    return (
        <div className="Profile">
            {/* <Headshot /> */}
            <Headline />
            <ContactInfo />
        </div>
    )
}

export default Profile