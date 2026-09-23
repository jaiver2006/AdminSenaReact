// Pie de página compartido con la información institucional del sistema.
function FooterFormulario() {
  return (
    <footer className="footer">
      {/* Presenta la identidad de la plataforma y una descripción breve. */}
      <div className="footer-content">
        {/* Datos de ubicación y soporte para el usuario administrador. */}
        <div>
          <h1>
            SENA <span>|</span> Gestión Académica
          </h1>
          <p>
            Plataforma para organizar la información de formación, aprendices,
            instructores y recursos tecnológicos.
          </p>
        </div>

        <div>
          <p>Servicio Nacional de Aprendizaje</p>
          <p>Bogotá, Colombia</p>
          <p>Soporte administrativo</p>
        </div>
      </div>

      {/* Línea inferior con derechos, año y versión de la plataforma. */}
      <div className="footer-bottom">
        <span>© 2026 SENA - Plataforma de Gestión Académica</span>
        <span>Versión 2.5</span>
      </div>
    </footer>
  );
}

export default FooterFormulario;
