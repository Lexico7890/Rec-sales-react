import {auth} from '../firebaseConfig/Firebase'


//CONSTANTS
const dataInitial = {
    authError: null
}


//TYPES
const SUCCESSFUL_USER_LOGIN= 'SUCCESSFUL_USER_LOGIN';
const ERROR_USER_LOGIN = 'ERROR_USER_LOGIN';


//REDUCER
export default function authReducer(state = dataInitial, action){
    switch(action.type){
        case SUCCESSFUL_USER_LOGIN:
            return { authError: action.getSatate }
        case ERROR_USER_LOGIN:
            return { authError: action.getSatate }
        default:
            return state
    }
        

}



//ACTIONS

export const successfulUserLogin = (credentials) => async(dispatch, getSatate) => {
    try {
        await auth.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        await dispatch({
            type: SUCCESSFUL_USER_LOGIN,
            getSatate: null
        })
        console.log('Exito')
    } catch (error) {
        await dispatch({
            type: ERROR_USER_LOGIN,
            getSatate: 'Login Failet'
        })
        console.log('Upsssss')
    }
    
}