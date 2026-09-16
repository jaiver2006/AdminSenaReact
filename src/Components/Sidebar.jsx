import { NavLink } from "react-router-dom";

function Sidebar() {
  // Centraliza las opciones del menu para evitar repetir enlaces en el JSX.
  const menuItems = [
    { path: "/areas", label: "Áreas", icon: "fa-layer-group" },
    { path: "/computadores", label: "Computadores", icon: "fa-desktop" },
    { path: "/centros", label: "Centros", icon: "fa-building" },
    { path: "/cursos", label: "Cursos", icon: "fa-book" },
    {
      path: "/instructores",
      label: "Instructores",
      icon: "fa-chalkboard-user",
    },
    { path: "/aprendices", label: "Aprendices", icon: "fa-user-graduate" },
    { path: "/noticias", label: "Noticias", icon: "fa-newspaper" },
    { path: "/informacion", label: "Quiénes somos", icon: "fa-circle-info" },
    { path: "/uniforme", label: "Uniforme SENA", icon: "fa-shirt" },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>SENA</h1>
        <img src="/src/assets/Img/sena-logo.png" alt="Logo SENA" width="100" />
        <p>Panel Administrativo</p>
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            {/* NavLink agrega la clase active segun la ruta actual. */}
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className={`fas ${item.icon}`} />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
