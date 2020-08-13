import React from 'react'
import { Homepage } from '../Components/Homepage'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../Components/Auth/Login'
import { Register } from '../Components/Auth/Register'



export const Routes = (props) => {

    return (
        <Switch>
            <Route path='/' exact render={(props) => <Homepage {...props} />} />
            <Route path='/homepage' exact render={(props) => <Homepage {...props} />} />
            <Route path='/login' exact render={(props) => <Login {...props} />} />
            <Route path='/register' exact render={(props) => <Register {...props} />} />

        </Switch>
    )
}