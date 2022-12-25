import styles from './Interests.module.scss';
import React from 'react';

interface IInterestsProps {
	interests: Array<string>
}

const Interests: React.FC<IInterestsProps> = ({ interests }) => {
	if (!interests) return null;

	return (
		<div className={styles.interests}>
			<div className={styles.interests__title}>
				Interests
			</div>
			<hr />
			<ul>
				{interests && interests.map((interest) => <li>{interest}</li>)}
				{/* {interests.map(} */}
			</ul>
		</div>
	)
}

export default Interests