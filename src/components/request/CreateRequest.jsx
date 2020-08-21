import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const CreateRequest = (props) => {
    const{handleSubmit} = useForm()
    const[request, setRequest] = useState()
    const onChange = (e) => {
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = (data, e) => {
        e.preventDefault();
        props.createRequest(request)
        e.target.reset()
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="grey-text text-darken-3">Create Request</h5>
                <div className="input-field">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" name="title" id="idtitle" onChange={onChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <input type="text" name="content" id="idcontent" onChange={onChange}/>
                </div>
                <div className="input field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateRequest
