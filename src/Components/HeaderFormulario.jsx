// Encabezado compartido para las pantallas que utilizan el layout de formularios.
function HeaderFormulario() {
  return (
    <header className="header-formulario">
      {/* Marca principal y acceso rápido a la página de inicio. */}
      <a href="/" className="brand">
        <i className="fas fa-home" />
        Sistema de Gestión SENA
      </a>

      {/* Navegación secundaria entre los módulos disponibles del sistema. */}
      <nav className="header-menu">
        <a href="/areas">Áreas</a>
        <a href="/computadores">Computadores</a>
        <a href="/centros">Centros</a>
        <a href="/cursos">Cursos</a>
        <a href="/instructores">Instructores</a>
        <a href="/aprendices">Aprendices</a>
        <a href="/uniforme">Uniforme</a>
        <a href="/noticias">Noticias</a>
      </nav>

      {/* Identificación visual del usuario que administra la plataforma. */}
      <div className="profile">
        <span className="badge">Administrador</span>

        <button type="button" className="profile-button">
          <span className="avatar">AD</span>
          Admin Regional
        </button>
      </div>
    </header>
  );
}

export default HeaderFormulario;
