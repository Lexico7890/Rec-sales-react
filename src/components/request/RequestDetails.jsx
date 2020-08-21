import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerRequestSeleccionadoAccion } from "../../redux/requestDuck";


const RequestDetails = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  console.log(id)
  useEffect(() => {
    console.log("entro a efect")
    dispatch(obtenerRequestSeleccionadoAccion(id));
  },[]);
  const request = useSelector(store => store.requests.requestId);
  return (
    <div>
      <div className="container section request-details">
      <div className="card z-depth-0">
        <div className="card content">
          <span className="card-title">algo</span>
          <p>bla bla bla</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by oscar casas</div>
          <div>23rd april, 4am</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RequestDetails;
