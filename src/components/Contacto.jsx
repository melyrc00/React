import React from "react";
import "./Navbar.css"



const Contacto = () => 


 (
    <>
<h1 className="centr">
    Dejame tu mensaje
</h1>

<section className="d-flex justify-content-center mb-5" >
<form  className="col-md-8">
<div className="form-group">
    <label for="nombre">Nombre</label>
    <input name="nombre" required type="text" id="nombre"
        className="form-control" placeholder="Tu nombre"/> 
</div>
<div className="form-group">
    <label for="correo">Correo electrónico</label>
    <input name="correo" required type="email" id="correo"
        className="form-control" placeholder="Tu correo electrónico"/>
</div>
<div className="form-group">
    <label for="mensaje">Mensaje</label>
    <textarea required placeholder="Escribe tu mensaje"
        className="form-control" name="mensaje" id="mensaje"
        cols="30" rows="8"></textarea>
</div>
<div className="form-group mt-3">
    <button className="btn btn-outline-secondary mp-50" type="submit">
        Enviar
    </button>
</div>
</form>
</section>

</>
    )


export default Contacto
