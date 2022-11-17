import React from 'react';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';
import Summary from './components/Summary/Summary';
import styles from './Resume.module.scss';
import clsx from 'clsx';

import data from './data'
import Experience from './components/Experience/Experience';

function Resume() {
	return (
		<div className={styles.resume}>
			{/* left sidebar */}
			<div className={clsx(styles.resume__column, styles.resume__sidebar)}>
				<ContactInfo />
			</div>
			{/* main content */}
			<div className={clsx(styles.resume__column, styles.resume__main)}>
				<Summary />
				<Section title={"Experience"}>
					{data.experience.map((e) =>
						<Experience {...e}/>
					)}
				</Section>
				<Section title={"Education"}>
					{data.education.map((e) =>
						<Experience {...e}/>
					)}
				</Section>
			</div>
		</div>
	);
}

export default Resume;
