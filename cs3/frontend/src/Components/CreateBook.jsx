import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Create_Book } from '../Redux/common/action'

export const CreateBook = (props) => {

    const [cat_id, setCatid] = useState(1)
    const [title, setTitle] = useState(1)
    const [price, setPrice] = useState(0.0)
    const [quantity, setQuantity] = useState(1)
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    let login = useSelector(state => state.login)


    const { logged_in_user_id } = login

    let dispatch = useDispatch()
    const handleCreate = () => {
        dispatch(Create_Book({ 'user_id': logged_in_user_id, 'cat_id': cat_id, 'title': title, 'price': price, 'quantity': quantity, 'description': description, 'author': author }))
        setTimeout(() => {
            props.history.push('/homepage')
        }, 2000)
    }

    return (
        <div>
            <div>
                CREATE BOOK
                <div class="form-group">
                    <label >Category ID</label>
                    <input type="text" class="form-control" name="cat_id" onChange={(e) => setCatid(e.target.value)} placeholder="Enter Name" />

                </div>
                <div class="form-group">
                    <label >Title</label>
                    <input type="text" class="form-control" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Enter email" />

                </div>
                <div class="form-group">
                    <label >Price</label>
                    <input type="text" class="form-control" name="price" onChange={(e) => setPrice(e.target.value)} placeholder="Enter email" />

                </div>

                <div class="form-group">
                    <label >Quantity</label>
                    <input type="text" class="form-control" name="quantity" onChange={(e) => setQuantity(e.target.value)} placeholder="Password" />
                </div>
                <div class="form-group">
                    <label >DESCRIPTION</label>
                    <input type="text" class="form-control" name="description" onChange={(e) => setDescription(e.target.value)} placeholder="Enter email" />

                </div>
                <div class="form-group">
                    <label >AUTHOR</label>
                    <input type="text" class="form-control" name="author" onChange={(e) => setAuthor(e.target.value)} placeholder="Enter email" />

                </div>

                <button type="submit" class="btn btn-primary" onClick={handleCreate}>CREATe</button>

            </div>
        </div>
    )
}