import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FiScissors, FiUser, FiCalendar, FiClock } from "react-icons/fi";

const Exito = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data =
    location.state || JSON.parse(localStorage.getItem("citaConfirmada"));

  const { servicio, fecha, hora, barbero } = data || {};

  if (!servicio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-black text-yellow-400 rounded-lg"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  const fechaFormateada = new Date(fecha).toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center">

        {/* ICONO */}
        <div className="flex justify-center mb-4">
          <div className="border-4 border-yellow-400 rounded-full p-4">
            <FaCheckCircle className="text-yellow-400 text-4xl" />
          </div>
        </div>

        {/* TEXTO */}
        <h1 className="text-2xl font-bold mb-2">
          ¡Cita Confirmada!
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Tu cita ha sido agendada exitosamente. Te esperamos.
        </p>

        {/* CARD */}
        <div className="bg-white rounded-xl shadow p-5 text-left mb-6 space-y-4">

          <div className="flex gap-3">
            <FiScissors className="text-yellow-500 mt-1" />
            <div>
              <p className="text-xs text-gray-500">Servicio</p>
              <p className="font-medium">{servicio.nombre}</p>
              <p className="text-xs text-gray-400">
                {servicio.duracion} • ${servicio.precio.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <FiUser className="text-yellow-500 mt-1" />
            <div>
              <p className="text-xs text-gray-500">Barbero</p>
              <p className="font-medium">{barbero.nombre}</p>
              <p className="text-xs text-gray-400">
                {barbero.especialidad}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <FiCalendar className="text-yellow-500 mt-1" />
            <div>
              <p className="text-xs text-gray-500">Fecha</p>
              <p className="font-medium">{fechaFormateada}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <FiClock className="text-yellow-500 mt-1" />
            <div>
              <p className="text-xs text-gray-500">Hora</p>
              <p className="font-medium">{hora}</p>
            </div>
          </div>

        </div>

        {/* INFO */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-left mb-6">
          <p className="font-semibold text-blue-700 mb-2">Importante</p>
          <ul className="text-blue-600 text-xs space-y-1">
            <li>• Llega 5 minutos antes de tu cita</li>
            <li>• Cancela con al menos 2 horas de anticipación</li>
            <li>• Descarga y muestra tu comprobante de Cita</li>
          </ul>
        </div>




        {/* BOTONES */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/citas")}
            className="flex-1 border py-2 rounded-lg"
          >
            Ver Mis Citas
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-black text-yellow-400 py-2 rounded-lg"
          >
            Volver al Inicio
          </button>
        </div>

      </div>
    </div>
  );
};

export default Exito;