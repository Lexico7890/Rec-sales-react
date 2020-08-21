import {db} from '../firebaseConfig/Firebase'
//CONSTANTES
const dataInitial = {
    arrayRequest: []
}
const requestSelection = {
    requestId: []
}
//TYPES
const OBTENER_REQUEST_EXITO = 'OBTENER_REQUEST_EXITO';
const OBTENER_REQUESTSELECCIONADO_EXITO = 'OBTENER_REQUESTSELECCIONADO_EXITO';

//REDUCER
export default function requestReducer(state = dataInitial, action){
    switch(action.type){
        case OBTENER_REQUEST_EXITO:
            return {arrayRequest: action.playload};
        case OBTENER_REQUESTSELECCIONADO_EXITO:
            return {requestId: action.playload}
        default:
            return state
    }
}

//actions
export const obtenerRequestsAccion = () => async(dispatch, getState) => {
    console.log("entro a obtenerRequest")
    try {
        if (dataInitial.arrayRequest.length < 1) {
            await db.collection('request').onSnapshot((querySnapShot) => {
                querySnapShot.forEach((doc) => {
                    dataInitial.arrayRequest.push({...doc.data(), id: doc.id})
                })
            })
            dispatch({
                type: OBTENER_REQUEST_EXITO,
                playload: dataInitial.arrayRequest
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const obtenerRequestSeleccionadoAccion = (id) => async(dispatch, getState) => {
    console.log("Entro a orsa")
    requestSelection.requestId = dataInitial.arrayRequest.filter(arrayId => arrayId.id === id);
    console.log(requestSelection.requestId)
    dispatch({
        type: OBTENER_REQUESTSELECCIONADO_EXITO,
        playload: requestSelection.requestId
    })
}

