import React from 'react';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Section from './components/Section/Section';
import Summary from './components/Summary/Summary';
import styles from './Resume.module.scss';
import clsx from 'clsx';

import data from './data'
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Terminal from './components/Terminal/Terminal';
import Interests from './components/Interests/Interests';

function Resume() {
	return (
		<div className={styles.resume}>
			{/* left sidebar */}
			<div className={clsx(styles.resume__column, styles.resume__sidebar)}>
				{/* <Terminal /> */}
				<ContactInfo {...data.contactInfo}/>
				<Skills {...data.skills}/>
				<Interests interests={data.interests}/>
			</div>
			{/* main content */}
			<div className={clsx(styles.resume__column, styles.resume__main)}>
				<Summary {...data.summary} />
				<Section title={"Experience"}>
					{data.experience.map((e) =>
						<Experience key={e.title} {...e}/>
					)}
				</Section>
				<Section title={"Education"}>
					{data.education.map((e) =>
						<Experience key={e.title} {...e}/>
					)}
				</Section>
				<Section title={"Leadership and Involvement"}>
					{data.involvement.map((e) =>
						<Experience key={e.title} {...e}/>
					)}
				</Section>
			</div>
		</div>
	);
}

export default Resume;
