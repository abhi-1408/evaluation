// import {LOGIN_QUERY,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,LOGIN_INFO_RESET} from "./actiontypes.js"

const initialState = {
    registered_flag: false
}

export default (state = initialState, { type, payload }) => {

    switch (type) {

        case "UPDATE_USER_REGISTERED":
            return {
                ...state,
                registered_flag: true
            }

        case "RESET_FLAG":
            return {
                ...state,
                registered_flag: false
            }


        default:
            return state
    }
}
