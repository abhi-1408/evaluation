import axios from "axios"

export const Update_Registered = (data) => {
    return {
        type: "UPDATE_USER_REGISTERED",
        payload: data
    }
}


export const Reset_Registered_Flag = (data) => {
    return {
        type: "RESET_FLAG",

    }
}



export const Register_User = (info) => {
    return dispatch => {
        return axios({
            method: "post",


            url: "http://127.0.0.1:5000/user/register",

            data: info
        })
            .then((res) => res.data)
            .then((data) => {
                dispatch(Update_Loggedin_User(data))
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

