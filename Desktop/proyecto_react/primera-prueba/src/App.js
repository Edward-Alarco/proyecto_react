import React, { Fragment } from 'react'
import "./styles/style.scss"
import Curso from './Curso.jsx'

const App = () => (
  <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-3">
                <a className="nav-link active" href="#">Inicio</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
              <li className="nav-item ml-3">
                <a className="nav-link btn btn-primary text-light" href="#">Cuenta</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <Curso />
          <Curso />
          <Curso />
          <Curso />
          <Curso />
        </div>
      </div>
  </>
)

export default App;
