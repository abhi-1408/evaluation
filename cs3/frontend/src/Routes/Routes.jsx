import React from 'react'
import { Homepage } from '../Components/Homepage'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Login } from '../Components/Auth/Login'
import { Logout } from '../Components/Auth/Logout'
import { Register } from '../Components/Auth/Register'
import { Navbar } from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { EditBook } from '../Components/EditBook'
import { CreateBook } from '../Components/CreateBook'
import { Description } from '../Components/Description'
import { useSelector } from 'react-redux'


export const Routes = (props) => {


    let login = useSelector(state => state.login)
    const { logged_in_flag, logged_in_user_id } = login

    return (
        <div>
            <BrowserRouter>
                {/* <Navbar /> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <a class="navbar-brand" href="/">HOME</a>
                    <a class="nav-item nav-link" href="login">Login</a>
                    <a class="nav-item nav-link" href="/register">Register</a> */}
                    {
                        logged_in_flag ?
                            <Link to='/homepage' class="nav-item nav-link"> HOME</Link>
                            :
                            ''

                    }
                    {logged_in_flag ?

                        <Link to='/logout' class="nav-item nav-link"> LOGOUT</Link>
                        :
                        <Link to='/login' class="nav-item nav-link"> LOGIN</Link>
                    }

                    <Link to='/register' class="nav-item nav-link"> REGISTER</Link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse">
                        <div class="navbar-nav">


                        </div>
                    </div>
                </nav>
                <Switch>
                    {/* <Route path='/' exact render={(props) => <Homepage {...props} />} /> */}
                    <Route path='/homepage' exact render={(props) => <Homepage {...props} />} />
                    <Route path='/login' exact render={(props) => <Login {...props} />} />
                    <Route path='/logout' exact render={(props) => <Logout {...props} />} />
                    <Route path='/register' exact render={(props) => <Register {...props} />} />
                    {/* <Route path='/edit/:id' exact render={(props) => <EditBook {...props} />} />
                    <Route path='/del/:id' exact render={(props) => <DeleteBook {...props} />} /> */}
                    <Route path='/edit/:id' exact render={(props) => <EditBook {...props} />} />
                    <Route path='/desc/:id' exact render={(props) => <Description {...props} />} />
                    <Route path='/create/' exact render={(props) => <CreateBook {...props} />} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}