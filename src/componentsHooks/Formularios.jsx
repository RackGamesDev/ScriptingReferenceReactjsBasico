import React, {useState} from 'react';

export function Formularios(props){//metodo para cuando no hayan muchos valores
    const [nombre, setNombre] = useState("");
    const [cual, setCual] = useState("");
    const [elige, setElige] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("bien", e);
    }

    return(
        <>
            <h2>form</h2>
            <form onSubmit={handleSubmit}>{/*funcion para cuando se haga el submit*/}
                <label htmlFor="nombre">nombre:</label>
                <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>{/*estableceria la variable de estado nombre en base a este input*/}
                <p>radio</p>
                <input type="radio" id="r1" name="cual" value="r1" onChange={(e) => setCual(e.target.value)}/><label htmlFor="">r1</label>{/*lo mismo con radios, valdria con checks*/}
                <input type="radio" id="r2" name="cual" value="r2" onChange={(e) => setCual(e.target.value)}/><label htmlFor="">r2</label>
                <input type="radio" id="r3" name="cual" value="r3" onChange={(e) => setCual(e.target.value)}/><label htmlFor="">r3</label>
                <input type="radio" id="r4" name="cual" value="r4" defaultChecked="true" onChange={(e) => setCual(e.target.value)}/><label htmlFor="">r4</label>
                <p>elige</p>
                <select name="elige" onChange={(e) => setElige(e.target.value)}>{/*lo mismo pero con select*/}
                    <option value="no">---</option>
                    <option value="op1">1</option>
                    <option value="op2">2</option>
                </select>
                <input type="submit" value="enviar"/>
            </form>
        </>
    );
}

export function FormulariosAvanzados(props){//metodo para cuando no hayan muchos valores
    const [form, setForm] = useState({});//una sola variable de estado para todo el formulario
    
    const handleChange = (e) => {//para todos los onChange
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    }
    const handleChecked = (e) => {//para todos los checked/bool
        setForm({
            ...form, [e.target.name]: e.target.checked
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("bien", e);
    }

    return(
        <>
            <h2>form2</h2>
            <form onSubmit={handleSubmit}>
                <label>nombre:</label>
                <input type="text" id="nombre" name="nombre" onChange={handleChange} value={form.nombre}/>
                <p>radio</p>
                <input type="radio" id="r1" name="cual" value="r1" onChange={handleChange}/><label>r1</label>
                <input type="radio" id="r2" name="cual" value="r2" onChange={handleChange}/><label>r2</label>
                <input type="radio" id="r3" name="cual" value="r3" onChange={handleChange}/><label>r3</label>
                <input type="radio" id="r4" name="cual" value="r4" defaultChecked="true" onChange={handleChange}/><label>r4</label>
                <p>elige</p>
                <select name="elige" onChange={handleChange}>
                    <option value="no">---</option>
                    <option value="op1">1</option>
                    <option value="op2">2</option>
                </select>
                <input type="submit" value="enviar"/>
            </form>
        </>
    );
}