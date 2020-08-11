import React from 'react'

const CrearArea = () => {
    return (
        <>
            <div className="col-md-6 my-5">
                <h2>Lista De Areas</h2>
                <ul>
                    {

                    }
                </ul>
            </div>
            <div className="col-md-6 my-5">
                <form>
                    <h4>Crear Area</h4>
                    <div className="form-group">
                        <label>Nombre Del Area </label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese nombre del area "/>
                    </div>
                    <div className="form-group">
                        <label>Descripción </label>
                        <textarea className="form-control" id="exampleTextarea"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Ejemplo seleccionar </label>
                        <select className="form-control" id="exampleSelect1">
                            <option>1 </option>
                            <option>2 </option>
                        </select>
                    </div>

                </form>
            </div>
        </>
    )
}

export default CrearArea
