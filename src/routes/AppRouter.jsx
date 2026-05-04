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

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="agendar" element={<AgendarCita />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="citas" element={<MisCitas />} />
          <Route path="agendar/time" element={<Time />} />
          <Route path="agendar/barbero" element={<Barber />} />
          <Route path="agendar/confirmacion" element={<Confirm />} />
          <Route path="agendar/guardada" element={<Exito />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}