import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';
import './AgregarUsuario.css'


function AgregarUsuario() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    const navigate = useNavigate()

    function agregarUsuario() {
        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: uniqid()
        }
        console.log(usuario)

        axios.post('api/usuario/agregarusuario', usuario).then(res => {
            //alert(res.data)
            Swal.fire('Felicidades', 'El usuario se creó con éxito!! ✔️😜')
            navigate('/');
        })
            .then(err => { console.log(err) })
    }


    return (
        <div className="container">
            <div className="row text-center">
                <h2 className="mt-4">Crear un nuevo usuario</h2>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" id="nombre" className="form-control" value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text" id="telefono" className="form-control" value={telefono} onChange={(e) => { setTelefono(e.target.value) }} />
                    </div>

                    <button onClick={agregarUsuario} className='btn-green' >Guardar Usuario</button>
                </div>
            </div>
        </div>

    )
}

export default AgregarUsuario
