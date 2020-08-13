import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Update_Book } from '../Redux/common/action'

export const Description = (props) => {



    const common = useSelector(state => state.common)
    const { all_books } = common




    return (
        <div>
            <div>
                {all_books && all_books.map(ele => {
                    if (ele.book_id == props.match.params.id) {
                        return (
                            <div>
                                <h2>Title: {ele.title}</h2>
                                <h2>Price: {ele.price}</h2>
                                <h2>Quantity: {ele.quantity}</h2>
                                <h2>Description: {ele.description}</h2>
                                <h2>Author: {ele.author}</h2>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}