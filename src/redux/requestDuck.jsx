import { db } from "../firebaseConfig/Firebase";

//CONSTANTES

const dataInitial = {
  arrayRequest: [],
  estado: 'init'
};


//TYPES
const OBTENER_REQUEST_EXITO = "OBTENER_REQUEST_EXITO";
const OBTENER_REQUESTSELECCIONADO_EXITO = "OBTENER_REQUESTSELECCIONADO_EXITO";
const OBTENER_REQUESTAPIREST_EXITO = "OBTENER_REQUESTAPIREST_EXITO";

//REDUCER
export default function requestReducer(state = dataInitial, action) {
  switch (action.type) {
    case OBTENER_REQUEST_EXITO:
      return { arrayRequest: action.playload, estado: action.getState};
    case OBTENER_REQUESTSELECCIONADO_EXITO:
      return { requestId: action.playload };
    case OBTENER_REQUESTAPIREST_EXITO:
      return { arrayRequest: action.playload };
    default:
      return state;
  }
}


//actions
export const obtenerRequestsAccion = () => async (dispatch, getState) => {
  console.log("entro a obtenerRequest");
  function algo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        dataInitial.estado = "in process";
        console.log(dataInitial.estado);
        db.collection("request").onSnapshot((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            dataInitial.arrayRequest.push({ ...doc.data(), id: doc.id });
          });
          resolve(dataInitial.estado);
          dispatch({
            type: OBTENER_REQUEST_EXITO,
            playload: dataInitial.arrayRequest,
            getState: dataInitial.estado
          });
        });
      }, 2000);
    });
  }

  function algoMas(){
    return new Promise(resolve => {
        setTimeout(()=>{
            dataInitial.estado = "ok";
            console.log(dataInitial.estado);
            resolve(dataInitial.estado);
            dispatch({
                type: OBTENER_REQUEST_EXITO,
                playload: dataInitial.arrayRequest,
                getState: dataInitial.estado
          });
        }, 2000)
    })
  }
  try {
    if (dataInitial.arrayRequest.length < 1) {
      console.log("ingreso al if");
      await algo();
      await algoMas()
    }
  } catch (error) {
    console.log(error);
  }
};

export const obtenerRequestSeleccionadoAccion = (id) => async (
  dispatch,
  getState
) => {
  console.log("Entro a orsa");
  console.log(id);
  console.log(dataInitial.arrayRequest);
  const valor = dataInitial.arrayRequest.filter((arrayId) => arrayId.id === id);
  console.log(valor);
  dispatch({
    type: OBTENER_REQUESTSELECCIONADO_EXITO,
    playload: valor,
  });
};

export const obtenerRequestsApiRest = () => async (dispatch, getState) => {
  const countDataArray = dataInitial.arrayRequest.length;
  dataInitial.arrayRequest.slice(countDataArray);
  console.log(countDataArray);
  console.log("Entro a fetch");
  (async () => {
    const result = await fetch("https://localhost:44399/api/Requests");
    const data = await result.json();
    data.forEach((item) => {
      dataInitial.arrayRequest.push(item);
      console.log(item);
    });
  })();

  dispatch({
    type: OBTENER_REQUESTAPIREST_EXITO,
    playload: dataInitial.arrayRequest,
  });
};

/*export const obtenerEstadoData = () =>async(dispatch, getState) =>{
    dispatch
}*/
