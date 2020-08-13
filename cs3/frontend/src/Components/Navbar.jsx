import React, { useEffect } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

export const Navbar = (props) => {

    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <a class="navbar-brand" href="/">HOME</a>
                    <a class="nav-item nav-link" href="login">Login</a>
                    <a class="nav-item nav-link" href="/register">Register</a> */}

                    <Link to='/' class="nav-item nav-link"> HOME</Link>
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
            </div>
        </div>
    )
}