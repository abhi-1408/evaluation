// import {LOGIN_QUERY,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,LOGIN_INFO_RESET} from "./actiontypes.js"

const initialState = {
    logged_in_user_id: null,
    logged_in_flag: false
}

export default (state = initialState, { type, payload }) => {

    switch (type) {

        case "UPDATE_LOGGEDIN_USER":
            return {
                ...state,
                logged_in_user_id: payload['user_id'],
                logged_in_flag: true
            }

        case "LOGOUT_USER":
            return {
                ...state,
                logged_in_flag: false,
                logged_in_user_id: null
            }


        default:
            return state
    }
}
