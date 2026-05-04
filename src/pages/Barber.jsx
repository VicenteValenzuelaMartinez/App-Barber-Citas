import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";

const barberos = [
  {
    id: 1,
    nombre: "Efrain Franco",
    especialidad: "Cortes clásicos y modernos",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    nombre: "Efrain Franco JR",
    especialidad: "Especialista en barbas",
    img: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 3,
    nombre: "Lula Martinez",
    especialidad: "Diseños y tendencias",
    img: "https://randomuser.me/api/portraits/men/60.jpg"
  }
];

const Barber = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { servicio, fecha, hora } = location.state || {};

  const [barberoSeleccionado, setBarberoSeleccionado] = useState(null);

  const pasoActual = 2;

  useEffect(() => {
    if (!servicio || !fecha || !hora) {
      navigate("/agendar");
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">

        <div className="mb-8">
          <div className="flex justify-between text-xs mb-2">
            {["Servicio", "Fecha", "Barbero", "Confirmar"].map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1">

                <div
                  className={`w-3 h-3 rounded-full mb-1 ${
                    index <= pasoActual ? "bg-black" : "bg-gray-300"
                  }`}
                />

                <span
                  className={`text-center ${
                    index <= pasoActual
                      ? "text-black font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {step}
                </span>

              </div>
            ))}
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-black transition-all"
              style={{ width: "75%" }}
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Agendar Cita
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-black text-yellow-400 p-2 rounded-lg">
            <FiUser />
          </div>

          <div>
            <p className="text-lg font-semibold">
              Selecciona tu Barbero
            </p>
            <p className="text-sm text-gray-500">
              Elige tu especialista favorito
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {barberos.map((barbero) => (
            <div
              key={barbero.id}
              onClick={() => setBarberoSeleccionado(barbero)}
              className={`cursor-pointer p-6 rounded-xl border text-center transition-all ${
                barberoSeleccionado?.id === barbero.id
                  ? "border-black scale-105 shadow-lg"
                  : "bg-white hover:shadow-md"
              }`}
            >
              <img
                src={barbero.img}
                alt={barbero.nombre}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
              />

              <h3 className="font-semibold text-lg">
                {barbero.nombre}
              </h3>

              <p className="text-sm text-gray-500">
                {barbero.especialidad}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between">

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 border rounded-xl hover:bg-gray-200"
          >
            Atrás
          </button>

          <button
            onClick={() => {
              if (!barberoSeleccionado) return;

              navigate("/agendar/confirmacion", {
                state: {
                  servicio,
                  fecha,
                  hora,
                  barbero: barberoSeleccionado
                }
              });
            }}
            disabled={!barberoSeleccionado}
            className={`px-6 py-2 rounded-xl font-medium ${
              barberoSeleccionado
                ? "bg-black text-yellow-400 hover:bg-gray-900"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            Continuar
          </button>

        </div>

      </div>
    </div>
  );
};

export default Barber;