// Importa las funciones necesarias de React Router para crear las rutas de la aplicación.
import { Routes, Route } from "react-router-dom";
// Importa los estilos globales del proyecto.
import "./App.css";

// Importa el layout principal del panel administrativo para mantener el mismo menú lateral y estructura visual.
import AdminLayout from "./Components/Layout/AdminLayout.jsx";

import AreasList from "./Pages/Areas/AreasList.jsx";
import AreasCreate from "./Pages/Areas/AreasCreate.jsx";
import AreasEdit from "./Pages/Areas/AreasEdit.jsx";
import AreasShow from "./Pages/Areas/AreasShow.jsx";

import ApprenticesList from "./Pages/Apprentices/ApprenticesList.jsx";
import ApprenticesCreate from "./Pages/Apprentices/ApprenticesCreate.jsx";
import ApprenticesEdit from "./Pages/Apprentices/ApprenticesEdit.jsx";
import ApprenticesShow from "./Pages/Apprentices/ApprenticesShow.jsx";

import TeachersList from "./Pages/Teachers/TeachersList.jsx";
import TeachersCreate from "./Pages/Teachers/TeachersCreate.jsx";
import TeachersEdit from "./Pages/Teachers/TeachersEdit.jsx";
import TeachersShow from "./Pages/Teachers/TeachersShow.jsx";

import ComputersList from "./Pages/Computers/ComputersList.jsx";
import ComputersCreate from "./Pages/Computers/ComputersCreate.jsx";
import ComputersEdit from "./Pages/Computers/ComputersEdit.jsx";
import ComputersShow from "./Pages/Computers/ComputersShow.jsx";

import CoursesList from "./Pages/Courses/CoursesList.jsx";
import CoursesCreate from "./Pages/Courses/CoursesCreate.jsx";
import CoursesEdit from "./Pages/Courses/CoursesEdit.jsx";
import CoursesShow from "./Pages/Courses/CoursesShow.jsx";

import TrainingCentersList from "./Pages/TrainingCenters/TrainingCentersList.jsx";
import TrainingCentersCreate from "./Pages/TrainingCenters/TrainingCentersCreate.jsx";
import TrainingCentersEdit from "./Pages/TrainingCenters/TrainingCentersEdit.jsx";
import TrainingCentersShow from "./Pages/TrainingCenters/TrainingCentersShow.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

// Este componente centraliza todas las rutas del proyecto.
// Cada Route define la URL y el componente que debe mostrarse al navegar.
function App() {
  return (
    <AdminLayout>
      {/* Routes contiene todas las rutas disponibles de la aplicación. */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Ruta para listar áreas. */}
        <Route path="/areas" element={<AreasList />} />
        <Route path="/areas/create" element={<AreasCreate />} />
        <Route path="/areas/:id/edit" element={<AreasEdit />} />
        <Route path="/areas/:id" element={<AreasShow />} />

        {/* Ruta para listar aprendices. */}
        <Route path="/apprentices" element={<ApprenticesList />} />
        {/* Ruta para crear un aprendiz. */}
        <Route path="/apprentices/create" element={<ApprenticesCreate />} />
        {/* Ruta para editar un aprendiz específico. */}
        <Route path="/apprentices/:id/edit" element={<ApprenticesEdit />} />
        {/* Ruta para ver el detalle de un aprendiz. */}
        <Route path="/apprentices/:id" element={<ApprenticesShow />} />

        <Route path="/teachers" element={<TeachersList />} />
        <Route path="/teachers/create" element={<TeachersCreate />} />
        <Route path="/teachers/:id/edit" element={<TeachersEdit />} />
        <Route path="/teachers/:id" element={<TeachersShow />} />

        <Route path="/computers" element={<ComputersList />} />
        <Route path="/computers/create" element={<ComputersCreate />} />
        <Route path="/computers/:id/edit" element={<ComputersEdit />} />
        <Route path="/computers/:id" element={<ComputersShow />} />

        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/create" element={<CoursesCreate />} />
        <Route path="/courses/:id/edit" element={<CoursesEdit />} />
        <Route path="/courses/:id" element={<CoursesShow />} />

        {/* Ruta para listar centros de formación. */}
        <Route path="/training-centers" element={<TrainingCentersList />} />
        {/* Ruta para crear un centro de formación. */}
        <Route
          path="/training-centers/create"
          element={<TrainingCentersCreate />}
        />
        {/* Ruta para editar un centro de formación específico. */}
        <Route
          path="/training-centers/:id/edit"
          element={<TrainingCentersEdit />}
        />
        {/* Ruta para ver el detalle de un centro de formación. */}
        <Route path="/training-centers/:id" element={<TrainingCentersShow />} />
      </Routes>
    </AdminLayout>
  );
}

export default App;
