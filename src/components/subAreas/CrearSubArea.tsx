import React from 'react'

const CrearSubArea = () => {
    return (
        <>
            <div className="col-md-6 my-5">
                <h2>Lista De Sub Areas</h2>
                <ul>
                    {

                    }
                </ul>
            </div>
            <div className="col-md-6 my-5">
                <form>
                    <h4>Crear Sub Area</h4>
                    <div className="form-group">
                        <label>Nombre De Sub Area </label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese nombre del area "/>
                    </div>
                    <div className="form-group">
                        <label>Descripción </label>
                        <textarea className="form-control" id="exampleTextarea"></textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CrearSubArea
