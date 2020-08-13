import axios from 'axios';
import {db} from '../Firebase'

//constantes
const dataInicial = {
    arrayAreas: [
        {id: "ghjcudjcd", name: "danna", description: "casas"}
    ]
}

const areaCreada = {
    area: {}
}

//types
const OBTENER_AREAS_EXITO = "OBTENER_AREAS_EXITO";
const CREAR_AREAS_EXITO = "CREAR_AREAS_EXITO";


//reducer
export default function areasReducer(state = dataInicial, action){
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
    console.log("Entro a obtenerAreas")
    try {
        await db.collection('areas').onSnapshot((querySnapShot) => {
            querySnapShot.forEach((doc) => {
                dataInicial.arrayAreas.push({...doc.data(), id: doc.id})
            })
        })
        dispatch({
            type: OBTENER_AREAS_EXITO,
            playload: dataInicial.arrayAreas
        })
    } catch (error) {
        console.log(error)
    }
}

export const crearAreaAccion = (areaObject) => async(dispatch, getState) => {
    console.log("entro a crearAccion")
    //console.log(areaObject)
    try {
        await db.collection('areas').doc().set(areaObject)
        dispatch({
            type: CREAR_AREAS_EXITO,
            playload: areaObject
        })
        console.log("todo bien")
    } catch (err) {
        console.log(err)
        
    }
}