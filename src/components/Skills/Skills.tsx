import styles from './Skills.module.scss'
import React from 'react'
import { ISkills, ISkillsCategory } from '../../model/model'

const Skills: React.FC<ISkills> = ({skillsCategories}) => {
    return (
        <div className={styles.skills}>
            <div className={styles.skills__title}>
                Technical
            </div>
            <hr />
            <div className={styles.skills__skillsCategories}>
                {skillsCategories.map((skillsCategory) => 
                    <div className={styles.skills__skillsCategories__skillsCategory}>
                        <div className={styles.skills__skillsCategories__skillsCategory__category}>{skillsCategory.category}</div>
                        <ul>
                            {skillsCategory.skills.map((skill) => 
                                <li>{skill}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Skills