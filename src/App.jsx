import { Routes, Route } from "react-router-dom";
import AdminLayout from "./Components/Layout/AdminLayout";

import AreasList from "./Pages/Areas/AreasList";
import AreasCreate from "./Pages/Areas/AreasCreate";
import AreasEdit from "./Pages/Areas/AreasEdit";
import AreasShow from "./Pages/Areas/AreasShow";

import ApprenticesList from "./Pages/Apprentices/ApprenticesList";
import ApprenticesCreate from "./Pages/Apprentices/ApprenticesCreate";
import ApprenticesEdit from "./Pages/Apprentices/ApprenticesEdit";
import ApprenticesShow from "./Pages/Apprentices/ApprenticesShow";

function App() {
  return (
    <AdminLayout>
      {/* Las rutas se renderizan dentro del layout para conservar el menu lateral. */}
      <Routes>
        {/* Rutas CRUD para la gestion de areas. */}
        <Route path="/areas" element={<AreasList />} />
        <Route path="/areas/create" element={<AreasCreate />} />
        <Route path="/areas/:id/edit" element={<AreasEdit />} />
        <Route path="/areas/:id" element={<AreasShow />} />

        {/* Rutas CRUD para la gestion de aprendices. */}
        <Route path="/apprentices" element={<ApprenticesList />} />
        <Route path="/apprentices/create" element={<ApprenticesCreate />} />
        <Route path="/apprentices/:id/edit" element={<ApprenticesEdit />} />
        <Route path="/apprentices/:id" element={<ApprenticesShow />} />
      </Routes>
    </AdminLayout>
  );
}

export default App;
