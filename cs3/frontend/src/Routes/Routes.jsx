import React from 'react'
import { Homepage } from '../Components/Homepage'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Login } from '../Components/Auth/Login'
import { Register } from '../Components/Auth/Register'
import { Navbar } from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { EditBook } from '../Components/EditBook'


export const Routes = (props) => {

    return (
        <div>
            <BrowserRouter>
                {/* <Navbar /> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <a class="navbar-brand" href="/">HOME</a>
                    <a class="nav-item nav-link" href="login">Login</a>
                    <a class="nav-item nav-link" href="/register">Register</a> */}

                    <Link to='/homepage' class="nav-item nav-link"> HOME</Link>
                    <Link to='/login' class="nav-item nav-link"> LOGIN</Link>
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
                    <Route path='/register' exact render={(props) => <Register {...props} />} />
                    {/* <Route path='/edit/:id' exact render={(props) => <EditBook {...props} />} />
                    <Route path='/del/:id' exact render={(props) => <DeleteBook {...props} />} /> */}
                    <Route path='/edit/:id' exact render={(props) => <EditBook {...props} />} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}