import React,{useState, useEffect} from "react";

const RequestSummary = (props) => {
    const[datos, setDatos] = useState([props.request])
  console.log(props.request);
  return (
    <>
      <div className="card z-depth-0 request-summary">
        {datos.map((item) => (
          <div className="card-content grey-text text-darken-3" key={item.id}>
            <span className="card-title" >
              {item.title}
            </span>
            <p>{item.content}</p>
            <p>{item.id}</p>
            <p className="grey-text">Algo de fecha</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RequestSummary;
