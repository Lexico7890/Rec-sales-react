import React,{useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {obtenerRequestsApiRest} from '../../redux/requestDuck'
import {useDispatch} from 'react-redux'

const SingIn = () => {

    const dispatch = useDispatch()
    const {handleSubmit} = useForm()
    const [user, setUser] = useState({
        email: '',
        password: ''
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

    /*useEffect(()=>{
        dispatch(obtenerRequestsApiRest())
    })*/

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} >
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="idemail" onChange={onChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="idpassword" onChange={onChange}/>
                </div>
                <div className="input field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    )
}

export default SingIn
