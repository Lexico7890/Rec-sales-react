import React, { useState, useEffect,} from "react";
import Notification from "./Notification";
import RequestList from "../request/RequestList";
import { useSelector } from "react-redux";
import {obtenerRequestsAccion} from '../../redux/requestDuck'
import {useDispatch} from 'react-redux'


const Dashboard = (props) => {
  const dispatch = useDispatch();
  
  let content
  const estados = useSelector(store => store.requests.estado)
  const requests = useSelector(store => store.requests.arrayRequest)
  useEffect(()=>{
    console.log(estados)
    if(estados === 'init'){
      console.log('activo dispatch')
      dispatch(obtenerRequestsAccion())
    }
  },[estados, dispatch])
  if(estados === 'in process'){
    content = <div>Cargando...</div>
    console.log("Cargando...")
  }else if(estados === 'ok'){
    console.log('todo bien todo bien')
  }
  
  console.log(requests)
  
  //
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <RequestList request={requests}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
    
};



export default Dashboard;
