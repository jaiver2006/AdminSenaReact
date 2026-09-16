import HeaderFormulario from "../HeaderFormulario";
import FooterFormulario from "../FooterFormulario";

function FormularioLayout({ children }) {
  return (
    <>
      {/* Encabezado y pie compartidos por las pantallas de formulario. */}
      <HeaderFormulario />

      <main className="container">{children}</main>

      <FooterFormulario />
    </>
  );
}

export default FormularioLayout;
