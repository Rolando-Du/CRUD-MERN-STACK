import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './EditarUsuario.css'


function EditarUsuario() {
    const params = useParams();
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .post('/api/usuario/obtenerdatausuario', { idusuario: params.idusuario })
            .then(res => {
                const dataUsuario = res.data;
                if (dataUsuario) {
                    setNombre(dataUsuario.nombre || '');
                    setEmail(dataUsuario.email || '');
                    setTelefono(dataUsuario.telefono || '');
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, [params.idusuario]);

    function editarUsuario() {
        const actualizarUsuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: params.idusuario
        };

        axios
            .post('/api/usuario/actualizausuario', actualizarUsuario)
            .then(res => {
                console.log(res.data);
                //alert(res.data);
                Swal.fire('Felicidades', 'El usuario fue editado correctamente!! ✔️')
                navigate('/');
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div className="container">
            <div className="row text-center">
                <h2 className="mt-4">Editar usuario 📝</h2>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            className="form-control"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input
                            type="text"
                            id="telefono"
                            className="form-control"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                        />
                    </div>

                    <button onClick={editarUsuario} className='btn-green'>Editar Usuario</button>
                </div>
            </div>
        </div>
    );
}

export default EditarUsuario;

