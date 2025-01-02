import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-white">
      <div className="container-fluid">
        {/* Logo  página principal */}
        <Link className="navbar-brand" to="/">
          <img className="logo" src="/img/logo.png" alt="logo" />
        </Link>

        {/* Botón para el menú en dispositivos pequeños */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Elementos del menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/quote">
                Pedidos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/neworder">
                Agregar nuevo pedido
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <strong>Iniciar Sesión</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
