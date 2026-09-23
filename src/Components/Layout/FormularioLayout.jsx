import HeaderFormulario from "../HeaderFormulario";
import FooterFormulario from "../FooterFormulario";

// Layout alternativo que agrupa encabezado, contenido de formulario y footer.
function FormularioLayout({ children }) {
  return (
    <>
      {/* Encabezado compartido para mantener una navegación consistente. */}
      <HeaderFormulario />

      {/* Contenido específico de la pantalla que está utilizando este layout. */}
      <main className="container">{children}</main>

      {/* Pie institucional reutilizable en las pantallas de formulario. */}
      <FooterFormulario />
    </>
  );
}

export default FormularioLayout;
