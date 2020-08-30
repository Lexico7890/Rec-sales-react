import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import {successfulUserLogin} from '../../redux/authDuck'
import {useDispatch, useSelector} from 'react-redux'


const SingIn = () => {

    const dispatch = useDispatch()
    const {handleSubmit} = useForm()
    const estado = useSelector(store => store.auth.authError)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const onSubmit= (data, e) => {
        e.preventDefault();
        dispatch(successfulUserLogin(user))
        console.log('termino dispatch')
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
                <div className="red-text center">
                    {estado ? <p>{estado}</p> : null}
                </div>
            </form>
        </div>
    )
}

export default SingIn
