import React, { useEffect } from 'react'



export const Register = (props) => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')

    let dispatch = useDispatch()
    let register = useSelector(state => state.register)
    const {
        registered_flag } = register

    const handleRegister = () => {
        dispatch(Register_User({ 'name': name, 'email': email, 'password': password, 'phone': phone, 'role': role }))
    }

    if (registered_flag) {
        props.history.push('/login')
    }
    return (
        <div>
            <div>Register</div>
            <div class="form-group">
                <label >Name</label>
                <input type="text" class="form-control" name="name" onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

            </div>
            <div class="form-group">
                <label >Phone</label>
                <input type="email" class="form-control" name="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Enter email" />

            </div>
            <div class="form-group">
                <label >Email address</label>
                <input type="email" class="form-control" name="username" onChange={(e) => setUsername(e.target.value)} placeholder="Enter email" />

            </div>

            <div class="form-group">
                <label >Password</label>
                <input type="password" class="form-control" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div class="form-group">
                <label >Role</label>
                <input type="email" class="form-control" name="role" onChange={(e) => setRole(e.target.value)} placeholder="Enter email" />

            </div>

            <button type="submit" class="btn btn-primary" onClick={handleRegister}>REGISTER</button>


        </div>
    )
}