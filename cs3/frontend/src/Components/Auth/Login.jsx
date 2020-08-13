import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login_User, Logout_User } from '../../Redux/login/action'
import { Redirect, useHistory } from 'react-router-dom'

export const Login = (props) => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let dispatch = useDispatch()
    let login = useSelector(state => state.login)
    const { logged_in_user_id,
        logged_in_flag } = login

    const handleLogin = () => {
        console.log(username, password)
        dispatch(Login_User({ 'username': username, 'password': password }))
    }

    const handleLogout = () => {
        dispatch(Logout_User())
    }

    let history = useHistory()

    if (logged_in_flag) {
        console.log(props)
        props.history.push('/homepage')
        // history.location.push('/homepage')
    }

    return (
        <div className="container">
            <div>login homepage</div>
            <div class="form-group">
                <label >Email address</label>
                <input type="email" class="form-control" name="username" onChange={(e) => setUsername(e.target.value)} placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label >Password</label>
                <input type="password" class="form-control" name="username" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>

            <button type="submit" class="btn btn-primary" onClick={handleLogin}>Submit</button>
            <button type="submit" class="btn btn-danger" onClick={handleLogout} >Logout</button>


            {/* values : {logged_in_flag ? 'true' : 'false'}  user_id{logged_in_user_id} */}



        </div>


    )
}