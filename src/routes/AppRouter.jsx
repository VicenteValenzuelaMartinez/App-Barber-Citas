import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AgendarCita from '../pages/AgendarCita';
import Barber from '../pages/Barber';
import Layout from "../layout/Layout";
import Time from '../pages/Time';
import Confirm from '../pages/Confirmation';
import Servicios from '../pages/Servicios';
import Exito from '../pages/Exito';
import MisCitas from '../pages/MisCitas';
import Login from '../pages/Login';
import ProtectedRoute from '../components/ProtectedRoutes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          {/* Publicas */}
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />

          {/* Protegidas */}
          <Route
            path="citas"
            element={
              <ProtectedRoute>
                <MisCitas />
              </ProtectedRoute>
            }
          />
          <Route
            path="agendar"
            element={
              <ProtectedRoute>
                <AgendarCita />
              </ProtectedRoute>
            }
          />
          <Route
            path="agendar/time"
            element={
              <ProtectedRoute>
                <Time />
              </ProtectedRoute>
            }
          />
          <Route
            path="agendar/barbero"
            element={
              <ProtectedRoute>
                <Barber />
              </ProtectedRoute>
            }
          />
          <Route
            path="agendar/confirmacion"
            element={
              <ProtectedRoute>
                <Confirm />
              </ProtectedRoute>
            }
          />
          <Route
            path="agendar/guardada"
            element={
              <ProtectedRoute>
                <Exito />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}