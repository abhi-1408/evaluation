import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Update_Book } from '../Redux/common/action'

export const EditBook = (props) => {

    const [cat_id, setCatid] = useState(1)
    const [title, setTitle] = useState(1)
    const [price, setPrice] = useState(0.0)
    const [quantity, setQuantity] = useState(1)
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')

    const common = useSelector(state => state.common)
    const { all_books } = common

    let dispatch = useDispatch()
    const handleEdit = () => {
        dispatch(Update_Book({ 'user_id': 4, 'book_id': props.match.params.id, 'cat_id': cat_id, 'title': title, 'price': price, 'quantity': quantity, 'description': description, 'author': author }))
        setTimeout(() => {
            props.history.push('/homepage')
        }, 2000)
    }


    useEffect(() => {
        all_books.map(ele => {
            if (ele.book_id == props.match.params.id) {
                setCatid(ele.id)
                setTitle(ele.title)
                setPrice(ele.price)
                setQuantity(ele.quantity)
                setDescription(ele.description)
                setAuthor(ele.author)
            }
        })
    }, [])

    return (
        <div>
            <div>
                EDIT BOOK
                <div class="form-group">
                    <label >Category ID</label>
                    <input type="text" class="form-control" name="cat_id" value={cat_id} onChange={(e) => setCatid(e.target.value)} placeholder="Enter Name" />

                </div>
                <div class="form-group">
                    <label >Title</label>
                    <input type="text" class="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter email" />

                </div>
                <div class="form-group">
                    <label >Price</label>
                    <input type="text" class="form-control" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter email" />

                </div>

                <div class="form-group">
                    <label >Quantity</label>
                    <input type="text" class="form-control" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Password" />
                </div>
                <div class="form-group">
                    <label >DESCRIPTION</label>
                    <input type="text" class="form-control" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter email" />

                </div>
                <div class="form-group">
                    <label >AUTHOR</label>
                    <input type="text" class="form-control" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter email" />

                </div>

                <button type="submit" class="btn btn-primary" onClick={handleEdit}>EDIT</button>

            </div>
        </div>
    )
}