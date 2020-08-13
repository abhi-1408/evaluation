import axios from "axios"
import { Reset_Registered_Flag } from '../register/action'

export const Update_Book_List = (data) => {
    return {
        type: "UPDATE_BOOK_LIST",
        payload: data
    }
}



export const Get_All_Books = (info) => {
    return dispatch => {
        return axios({
            method: "post",


            url: "http://127.0.0.1:5000/book/getallbooks",

            data: info
        })
            .then((res) => res.data)
            .then((data) => {
                dispatch(Update_Book_List(data))

            })
            .catch((err) => {
                console.log(err)

            })
    }
}


