import './App.css';
import ListaUsuarios from './components/Lista/ListaUsuarios';
import AgregarUsuario from './components/Agregar/AgregarUsuario';
import EditarUsuario from './components/Editar/EditarUsuario';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Container>
          <Navbar.Brand href="/">Crud MERN STACK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="agregarusuario">Agregar Usuario</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuarios />} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario />} exact></Route>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
