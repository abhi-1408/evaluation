import React, { useEffect } from 'react'
import styles from '../css/Homepage.module.css'
import { useSelector } from 'react-redux'



export const Homepage = (props) => {

    let login = useSelector(state => state.login)
    const { logged_in_user_id,
        logged_in_flag } = login




    return (
        <div>
            <div id={styles.t1} >hello homepage</div>
            values : {logged_in_flag ? 'true' : 'false'}  user_id{logged_in_user_id}

        </div>
    )
}