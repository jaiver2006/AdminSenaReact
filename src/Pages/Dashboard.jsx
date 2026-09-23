import { Link } from "react-router-dom";

// Tarjetas de resumen que enlazan cada indicador con su módulo correspondiente.
const stats = [
  {
    label: "Aprendices",
    value: "20",
    icon: "fa-user-graduate",
    tone: "green",
    to: "/apprentices",
  },
  {
    label: "Cursos activos",
    value: "20",
    icon: "fa-book-open",
    tone: "blue",
    to: "/courses",
  },
  {
    label: "Instructores",
    value: "20",
    icon: "fa-chalkboard-user",
    tone: "amber",
    to: "/teachers",
  },
  {
    label: "Computadores",
    value: "20",
    icon: "fa-desktop",
    tone: "purple",
    to: "/computers",
  },
  {
    label: "Áreas",
    value: "20",
    icon: "fa-layer-group",
    tone: "rose",
    to: "/areas",
  },
  {
    label: "Centros",
    value: "20",
    icon: "fa-building",
    tone: "teal",
    to: "/training-centers",
  },
];

// Acciones frecuentes para crear registros directamente desde el dashboard.
const quickActions = [
  {
    label: "Registrar aprendiz",
    icon: "fa-user-plus",
    to: "/apprentices/create",
  },
  { label: "Crear curso", icon: "fa-plus", to: "/courses/create" },
  {
    label: "Agregar instructor",
    icon: "fa-person-chalkboard",
    to: "/teachers/create",
  },
];

// Página inicial con indicadores generales y actividad reciente del sistema.
function Dashboard() {
  return (
    <section className="dashboard">
      {/* Presentación principal del panel y periodo académico visible. */}
      <div className="dashboard-welcome">
        <div>
          <p className="eyebrow">Resumen general</p>
          <h1>Todo bajo control</h1>
          <p>Consulta rápidamente el estado de la gestión académica.</p>
        </div>
        <div className="dashboard-date">
          <i className="fas fa-calendar-day" aria-hidden="true" />
          <span>Gestión 2026</span>
        </div>
      </div>

      {/* Resumen numérico de los módulos administrados. */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <Link className="stat-card" to={stat.to} key={stat.label}>
            <span className={`stat-icon ${stat.tone}`}>
              <i className={`fas ${stat.icon}`} aria-hidden="true" />
            </span>
            <span className="stat-copy">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </span>
            <i
              className="fas fa-arrow-up-right-from-square stat-arrow"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>

      {/* Divide el dashboard entre accesos rápidos y actividad del sistema. */}
      <div className="dashboard-columns">
        <div className="dashboard-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Acciones frecuentes</p>
              <h2>Accesos rápidos</h2>
            </div>
            <i className="fas fa-bolt" aria-hidden="true" />
          </div>
          {/* Enlaces para iniciar rápidamente las operaciones más usadas. */}
          <div className="quick-actions">
            {quickActions.map((action) => (
              <Link className="quick-action" to={action.to} key={action.label}>
                <span>
                  <i className={`fas ${action.icon}`} aria-hidden="true" />
                </span>
                {action.label}
                <i className="fas fa-chevron-right" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        <div className="dashboard-panel activity-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Estado del sistema</p>
              <h2>Actividad reciente</h2>
            </div>
            <span className="status-pill">
              <i className="fas fa-circle" aria-hidden="true" /> En línea
            </span>
          </div>
          {/* Actividad simulada que resume el estado actual de los registros. */}
          <ul className="activity-list">
            <li>
              <span className="activity-dot green" />
              20 cursos registrados<span>Hoy</span>
            </li>
            <li>
              <span className="activity-dot blue" />
              20 aprendices disponibles<span>Hoy</span>
            </li>
            <li>
              <span className="activity-dot amber" />
              20 equipos en inventario<span>Ahora</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
