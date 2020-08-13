import React,{useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {crearAreaAccion, obtenerAreasAccion} from '../../redux/areasDuck';
import Lista from '../Lista';

const CrearArea = () => {

    const dispatch = useDispatch()
    const areas = useSelector(store => store.areas.arrayAreas)
    const {error, register, handleSubmit} = useForm(
    );
    const [area, setArea] = useState([])

    const enviarDatos = (data, e) => {
        dispatch(crearAreaAccion(data));
        e.target.reset()
    }

    useEffect(() => {
        
    }, [])

    const pruebaBoton = async() => {
        
        dispatch(obtenerAreasAccion())
        //console.log(areas)
        setArea([
            ...area,
            areas
        ])
        console.log(areas)
        /*const result = areas.map((item,index,array) => {
            console.log(item);
            console.log(index);
            console.log(array);

        })*/
    }

    

    //<Lista areas={areas}/> 

    

    return (
        <>
            <div className="col-md-6 my-5">
                <h2>Lista De Areas</h2>
                <button onClick={() => pruebaBoton()}>Prueba</button>
                <ul>
                    <li>Algo</li>
                    {
                        areas.map((area) => (
                            <li key={area.name}>{area.name}</li>
                        ))
                        
                    }
                </ul>
                
            </div>
            <div className="col-md-6 my-5">
                <form onSubmit={handleSubmit(enviarDatos)}>
                    <h4>Crear Area</h4>
                    <div className="form-group">
                        <label>Nombre Del Area </label>
                        <input 
                            name="name"
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Ingrese nombre del area "
                            ref={
                                register({
                                    required: {value: true, message: "Necesario"},
                                    minLength: {value: true, message: "minimo 3 letras"}
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripción </label>
                        <textarea 
                            className="form-control" 
                            id="exampleTextarea" 
                            name="description"
                            ref={
                                register({
                                    required: {value: true, message: "Necesario"},
                                    minLength: {value: true, message: "minimo 3 letras"}
                                })
                            }
                        ></textarea>
                    </div>
                    <div>
                        <button className="btn btn-primary"/* onClick={() => dispatch(crearAreaAccion({name: "oscar"}))}*/>Crear</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CrearArea
