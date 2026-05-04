import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";

const Confirmacion = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state;
  const { servicio, fecha, hora, barbero } = data || {};


  const pasoActual = 3;

  if (!servicio || !fecha || !hora || !barbero) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => navigate("/agendar")}
          className="px-6 py-2 rounded-xl font-medium bg-black text-yellow-400"
        >
          Crear cita
        </button>
      </div>
    );
  }

  const fechaFormateada = new Date(fecha).toLocaleDateString("es-MX", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });

  const handleConfirmar = () => {
    const nuevaCita = {
      servicio,
      fecha,
      hora,
      barbero,
      nombre: "Oscar",
      telefono: "4751072242"
    };

    const citas = JSON.parse(localStorage.getItem("citas")) || [];
    citas.push(nuevaCita);
    localStorage.setItem("citas", JSON.stringify(citas));

    navigate("/agendar/guardada", {
      state: nuevaCita
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">

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
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-6">
          Agendar Cita
        </h1>

        <div className="bg-white rounded-xl shadow p-6">

          <div className="flex items-center gap-3 mb-6">
            <div className="bg-black text-white p-2 rounded-lg">
              <FiUser />
            </div>

            <div>
              <p className="font-semibold">Tus Datos</p>
              <p className="text-sm text-gray-500">
                Información del cliente
              </p>
            </div>
          </div>

          <div className="mb-6 space-y-3 text-sm">

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Nombre</span>
              <span className="font-medium">Oscar</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Teléfono</span>
              <span className="font-medium">4751072242</span>
            </div>

          </div>

          <div className="bg-gray-50 p-4 rounded-xl mb-6 border">
            <p className="font-semibold mb-4">Resumen de tu cita</p>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Servicio</span>
                <span className="font-medium">{servicio.nombre}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Barbero</span>
                <span className="font-medium">{barbero.nombre}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Fecha</span>
                <span className="font-medium">{fechaFormateada}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Hora</span>
                <span className="font-medium">{hora}</span>
              </div>

              <div className="flex justify-between pt-2">
                <span className="text-gray-700 font-semibold">Total</span>
                <span className="font-bold text-black">
                  ${servicio.precio.toLocaleString()}
                </span>
              </div>

            </div>
          </div>

          <div className="flex justify-between mt-6">

            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 border rounded-xl hover:bg-gray-200 transition"
            >
              Atrás
            </button>

            <button
              onClick={handleConfirmar}
              className="px-6 py-2 rounded-xl font-medium bg-black text-yellow-400 hover:bg-gray-900 transition"
            >
              Confirmar Cita
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Confirmacion;