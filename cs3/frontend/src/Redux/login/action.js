import axios from "axios"
import { Reset_Registered_Flag } from '../register/action'

export const Update_Loggedin_User = (data) => {
    return {
        type: "UPDATE_LOGGEDIN_USER",
        payload: data
    }
}



export const Login_User = (info) => {
    return dispatch => {
        return axios({
            method: "post",


            url: "http://127.0.0.1:5000/user/login",

            data: info
        })
            .then((res) => res.data)
            .then((data) => {
                dispatch(Update_Loggedin_User(data))
                dispatch(Reset_Registered_Flag())
            })
            .catch((err) => {
                console.log(err)

            })
    }
}

export const Logout_User = () => {
    return dispatch => dispatch({
        type: "LOGOUT_USER",

    })
}

