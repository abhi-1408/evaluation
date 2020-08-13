import React, { useEffect } from 'react'


export const Navbar = (props) => {

    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">HOME</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="login">Login</a>
                            <a class="nav-item nav-link" href="/register">Register</a>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}