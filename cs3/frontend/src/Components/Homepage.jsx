import React, { useEffect } from 'react'
import styles from '../css/Homepage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Get_All_Books, Get_Filtered_Books, Delete_books, Book_Search } from '../Redux/common/action'
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
        dispatch(Delete_books({ 'user_id': logged_in_user_id, 'book_id': parseInt(e.target.name) }))
    }

    const handleEdit = (e) => {
        props.history.push(e.target.name)
    }

    const handleDesc = (e) => {
        props.history.push(e.target.name)
    }

    const handleCreate = () => {
        props.history.push('/create')
    }

    const [search, setSearch] = useState('')

    const handleSearch = () => {
        // console.log('search is ', search)
        if (search == '') {
            dispatch(Get_All_Books({ page_size: 2, page: 1 }))
        }
        else {

            dispatch(Book_Search({ 'author': ['hi', search], page_size: 2, page: 1 }))
        }
    }

    useEffect(() => {
        dispatch(Get_All_Books({ 'page_size': 2, 'page': page }))
    }, [])
    return (
        <BrowserRouter>
            <div>
                <button className="btn mx-2" onClick={handleSortP}>SORT BY PRICE</button>
                <button className="btn" onClick={handleSortQ}>SORT BY QUANTITY</button>
                <button className="btn" onClick={handleCreate}>CREATE BOOK</button>


                {/* <div id={styles.t1} >hello homepage</div>
                <div id={styles.t1} >page is {page}</div> */}
                <br></br>
                <div class="form-group">
                    <label >Price</label>
                    <input type="text" class="form-control" name="search" onChange={(e) => setSearch(e.target.value)} placeholder="search by author name" />
                    <button className="btn" name="next" onClick={handleSearch}>search</button>
                </div>
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
                                    <th scope="row"> <button name={`/desc/${ele.book_id}`} onClick={(e) => handleDesc(e)}>{ele.book_id}</button></th>
                                    <td>{ele.cat_id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.author}</td>
                                    <td>{ele.price}</td>
                                    <td>{ele.quantity}</td>
                                    {(ele.user_id == logged_in_user_id) ?
                                        <td><button name={`/edit/${ele.book_id}`} onClick={(e) => handleEdit(e)}>edit</button></td>
                                        :
                                        <td><button name={`/edit/${ele.book_id}`} onClick={(e) => handleEdit(e)} disabled>edit</button></td>
                                    }
                                    {(ele.user_id == logged_in_user_id) ?
                                        <td> <button className="btn" name={ele.book_id} onClick={(e) => handledelete(e)}>delete</button></td>
                                        :
                                        <td> <button className="btn" name={ele.book_id} onClick={(e) => handledelete(e)} disabled>delete</button></td>
                                    }
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