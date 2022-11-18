import styles from './Terminal.module.scss'
import React from 'react'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const Terminal = () => {
  return (
    <div className={styles.terminal}>
        <div className={styles.terminal__topbar}>
            <CircleOutlinedIcon sx={{color: "white"}} fontSize="small"/>
            <CircleOutlinedIcon sx={{color: "white"}} fontSize="small"/>
            <CircleOutlinedIcon sx={{color: "white"}} fontSize="small"/>
        </div>
        <hr />
        <div className={styles.terminal__content}>
            &#62; ./should_you_hire_me.sh<br />
            yes
        </div>
    </div>
  )
}

export default Terminal