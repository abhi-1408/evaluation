import React, { useEffect } from 'react'
import styles from '../css/Homepage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Get_All_Books } from '../Redux/common/action'
import { useRef } from 'react'
import { useState } from 'react'


export const Homepage = (props) => {

    let common = useSelector(state => state.common)

    const { all_books } = common

    let dispatch = useDispatch()
    const [page, setPage] = useState(1)


    const handleclick = () => {
        setPage(page - 1)
        dispatch(Get_All_Books({ 'page_size': 2, 'page': page - 1 }))
    }

    const handleclick1 = () => {
        setPage(page + 1)
        dispatch(Get_All_Books({ 'page_size': 2, 'page': page + 1 }))
    }



    useEffect(() => {
        dispatch(Get_All_Books({ 'page_size': 2, 'page': page }))
    }, [])
    return (
        <div>
            <button onClick={handleclick}>get</button>
            <div id={styles.t1} >hello homepage</div>
            <div id={styles.t1} >page is {page}</div>
            BOOKS ARE:
            {all_books && all_books.map(ele => {

                return (
                    <div>
                        <h2>{ele.user_id}</h2>
                        <h2>{ele.book_id}</h2>
                        <h2>{ele.title}</h2>
                        <h2>{ele.price}</h2>
                    </div>
                )
            }
            )}

            <div>
                <button name="prev" onClick={handleclick}>prev</button>
                <button name="next" onClick={handleclick1}>next</button>
            </div>
        </div>
    )
}