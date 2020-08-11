import axios from 'axios';
import {db} from '../Firebase'

//constantes
const dataInicial = {
    arrayAreas: []
}
const areaCreada = {
    area: {}
}

//types
const OBTENER_AREAS_EXITO = "OBTENER_AREAS_EXITO";
const CREAR_AREAS_EXITO = "CREAR_AREAS_EXITO";


//reducer
export default function areasReducer(state = dataInicial, area = areaCreada, action){
    switch(action.type){
        case OBTENER_AREAS_EXITO:
            return {...state, arrayAreas: action.playload}
        case CREAR_AREAS_EXITO:
            return {...state, arrayAreas: action.playload}
        default:
            return state
    }
}


//acciones
export const obtenerAreasAccion = () => async(dispatch, getState) => {
    
    /*try {
        const res = await 
    } catch (error) {
        console.log(error)
    }*/
}

export const crearAreaAccion = (areaObject) => async(dispatch, getState) => {
    console.log(areaObject)
    try {
        await db.collection('areas').doc().set(areaObject)
        dispatch({
            type: CREAR_AREAS_EXITO,
            playload: areaObject
        })
    } catch (err) {
        console.log(err)
        
    }
}