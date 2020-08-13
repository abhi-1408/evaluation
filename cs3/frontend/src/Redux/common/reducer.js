// import {LOGIN_QUERY,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,LOGIN_INFO_RESET} from "./actiontypes.js"

const initialState = {
    all_books: []
}

export default (state = initialState, { type, payload }) => {

    switch (type) {

        case "UPDATE_BOOK_LIST":
            return {
                ...state,
                all_books: payload
            }


        default:
            return state
    }
}
