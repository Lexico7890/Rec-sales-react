import React,{useState} from 'react'
import {useForm} from 'react-hook-form'

const SingUp = () => {

    const {errors, register, handleSubmit, handleChange} = useForm()
    const [user, setUser] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    const onSubmit= (data, e) => {
        e.preventDefault();
        console.log(user)
    }
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="idFirstName" onChange={onChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="idLastName" onChange={onChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="idemail" onChange={onChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="idpassword" onChange={onChange}/>
                </div>
                <div className="input field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SingUp
