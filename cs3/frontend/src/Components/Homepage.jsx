import React, { useEffect } from 'react'
import styles from '../css/Homepage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Get_All_Books, Get_Filtered_Books } from '../Redux/common/action'
import { useRef } from 'react'
import { useState } from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import { EditBook } from '../Components/EditBook'


export const Homepage = (props) => {

    let common = useSelector(state => state.common)
    let login = useSelector(state => state.login)

    const { all_books } = common
    const { logged_in_user_id } = login

    let dispatch = useDispatch()
    const [page, setPage] = useState(1)


    const handleclick = () => {
        if (page > 1) {

            setPage(page - 1)
            dispatch(Get_All_Books({ 'page_size': 2, 'page': page - 1 }))
        }
    }

    const handleclick1 = () => {
        setPage(page + 1)
        dispatch(Get_All_Books({ 'page_size': 2, 'page': page + 1 }))
    }

    const [alter, setAlter] = useState(false)
    const handleSortP = () => {
        if (alter) {

            dispatch(Get_Filtered_Books({ 'sort_by': ['price', 'desc'], 'page_size': 2, 'page': page }))
            setAlter(false)
        }
        else {
            dispatch(Get_Filtered_Books({ 'sort_by': ['price', 'asc'], 'page_size': 2, 'page': page }))
            setAlter(true)
        }
    }

    const [alterq, setAlterq] = useState(false)
    const handleSortQ = () => {
        if (alterq) {

            dispatch(Get_Filtered_Books({ 'sort_by': ['quantity', 'desc'], 'page_size': 2, 'page': page }))
            setAlterq(false)
        }
        else {
            dispatch(Get_Filtered_Books({ 'sort_by': ['quantity', 'asc'], 'page_size': 2, 'page': page }))
            setAlterq(true)
        }
    }

    const handledelete = (e) => {
        // props.history.push('/edit/5')
        console.log('del clicked', e.target.name, logged_in_user_id)
    }

    const handleEdit = (e) => {
        props.history.push(e.target.name)
    }


    useEffect(() => {
        dispatch(Get_All_Books({ 'page_size': 2, 'page': page }))
    }, [])
    return (
        <BrowserRouter>
            <div>
                <button className="btn mx-2" onClick={handleSortP}>SORT BY PRICE</button>
                <button className="btn" onClick={handleSortQ}>SORT BY QUANTITY</button>

                <div id={styles.t1} >hello homepage</div>
                <div id={styles.t1} >page is {page}</div>
            BOOKS ARE:
            <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">category_id</th>
                            <th scope="col">title</th>
                            <th scope="col">author</th>
                            <th scope="col">price</th>
                            <th scope="col">quantity</th>
                            <th scope="col">edit</th>
                            <th scope="col">del</th>

                        </tr>
                    </thead>
                    <tbody>
                        {all_books && all_books.map(ele => {

                            return (

                                <tr>
                                    <th scope="row">{ele.book_id}</th>
                                    <td>{ele.cat_id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.author}</td>
                                    <td>{ele.price}</td>
                                    <td>{ele.quantity}</td>
                                    <td><button name={`/edit/${ele.book_id}`} onClick={(e) => handleEdit(e)}>edit</button></td>
                                    <td> <button className="btn" name={ele.book_id} onClick={(e) => handledelete(e)}>delete</button></td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
                <div>
                    <button className="btn mx-2" name="prev" onClick={handleclick}>prev</button>
                    <button className="btn" name="next" onClick={handleclick1}>next</button>
                </div>
            </div>


        </BrowserRouter>
    )
}