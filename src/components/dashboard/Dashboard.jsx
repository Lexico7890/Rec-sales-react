import React, { useState } from "react";
import Notification from "./Notification";
import RequestList from "../request/RequestList";
//import {obtenerRequestsAccion} from '../../redux/requestDuck'
import { useSelector } from "react-redux";

const Dashboard = (props) => {
  
  //const dispatch = useDispatch();
  const requests = useSelector(store => store.requests.arrayRequest)
  const[request] = useState(requests);
  console.log(request)
  /*useEffect(() => {
    
    setRequest([
      ...request,
      requests
    ])
    console.log(request)
  },[])*/

  


  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <RequestList request={request}/>
        </div>
        <div className="col s12 m5 offset-m1">
          <Notification />
        </div>
      </div>
    </div>
  );
};



export default Dashboard;
