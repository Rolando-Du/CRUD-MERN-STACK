import React, { useEffect, useState } from 'react';
import UsuarioIndividual from '../Usuario/UsuarioIndividual';
import axios from 'axios';
import './ListaUsuarios.css';


function ListaUsuarios() {
    const [datausuarios, setDatausuarios] = useState([]);

    useEffect(() => {
        axios
            .get('/api/usuario/obtenerusuarios')
            .then((res) => {
                console.log(res);
                setDatausuarios(res.data);
            })
            .catch((err) => {
                console.log(datausuarios);
            });
    }, []);

    return (
        <div className="lista-usuarios">
            <h2 className="lista-usuarios-title ">Lista de Usuarios</h2>
            {datausuarios.map((usuario) => (
                <UsuarioIndividual key={usuario.idusuario} usuario={usuario} className='data' />
            ))}
        </div>
    );
}

export default ListaUsuarios;
