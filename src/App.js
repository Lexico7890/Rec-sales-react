import React from 'react';
import '@material-ui/core'
import CrearNotificacion from './components/Notificaciones/CrearNotificacion';
import CrearArea from './components/areas/CrearArea'
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import CrearSubArea from './components/subAreas/CrearSubArea'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {

  const store = generateStore()
  
  return (
    <Provider store={store}>
    <div className="container">
      <div className="row">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="" className="navbar-brand">
          Barra de navegación
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/CrearNotificacion" className="nav-link" href="#">
                Notificaciones <span className="sr-only">(actual) </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CrearArea" className="nav-link" href="#">
                Areas <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link" href="#">
                Precios{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Acerca de{" "}
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Buscar "/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar </button>
          </form>
        </div>
      </nav>
      <Switch>
          <Route path="/CrearArea">
            <CrearArea/>
          </Route>
          <Route path="/CrearNotificacion">
            <CrearNotificacion/>
          </Route>
        </Switch>
    </Router>
      </div>
    </div>
    </Provider>
  );
}

export default App;
