import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login_User, Logout_User } from '../../Redux/login/action'
import { Redirect, useHistory } from 'react-router-dom'

export const Logout = (props) => {



    let dispatch = useDispatch()
    let login = useSelector(state => state.login)
    const { logged_in_user_id,
        logged_in_flag } = login



    const handleLogout = () => {
        dispatch(Logout_User())
        props.history.push('/login')
    }



    return (
        <div className="container">
            <div>logout </div>


            <button type="submit" class="btn btn-danger" onClick={handleLogout} >Logout</button>


            {/* values : {logged_in_flag ? 'true' : 'false'}  user_id{logged_in_user_id} */}



        </div>


    )
}