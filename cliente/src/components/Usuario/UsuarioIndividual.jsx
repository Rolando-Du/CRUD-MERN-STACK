import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';


function UsuarioIndividual({ usuario }) {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init()
    }, [])

    // Borrar usuario
    const borrarUsuario = (idUsuario) => {
        axios
            .post('/api/usuario/borrarusuario', { idusuario: idUsuario })
            .then((res) => {
                console.log(res.data);
                //alert(res.data);
                Swal.fire('Atentón!!', 'El usuario se eliminó con éxito!! ✔️😜')
                navigate('/'); // Redireccionar al inicio después de borrar

            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3 mx-auto" data-aos='flip-right'>
                    <hr className="hr-pulse mt-6" />
                    <ul className="list-group">
                        <li className="list-group-item">{usuario.idusuario}</li>
                        <li className="list-group-item">{usuario.nombre}</li>
                        <li className="list-group-item">{usuario.email}</li>
                        <li className="list-group-item">{usuario.telefono}</li>
                    </ul>
                    <Link to={`/editarusuario/${usuario.idusuario}`}>
                        <button className="btn-edit">Editar</button>
                    </Link>
                    <button className="btn-delete" onClick={() => borrarUsuario(usuario.idusuario)}>
                        Borrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UsuarioIndividual;
