import React from 'react'
import { Homepage } from '../Components/Homepage'
import { Route, Switch } from 'react-router-dom'



export const Routes = (props) => {

    return (
        <Switch>
            <Route path='/' render={(props) => <Homepage {...props} />} />
            <Route path='/homepage' render={(props) => <Homepage {...props} />} />

        </Switch>
    )
}