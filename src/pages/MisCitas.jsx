import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiCalendar, FiClock, FiScissors } from "react-icons/fi";

const MisCitas = () => {
  const navigate = useNavigate();
  const [citas, setCitas] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("citas")) || [];
    setCitas(data);
  }, []);

  const eliminarCita = (index) => {
    const nuevas = citas.filter((_, i) => i !== index);
    setCitas(nuevas);
    localStorage.setItem("citas", JSON.stringify(nuevas));
    setModal(null);
  };

  const handlePDF = async (cita) => {
    const { generarTicketPDF } = await import(
      "../utlis/generarTicketPDF"
    );
    generarTicketPDF(cita);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">Mis Citas</h1>
        <p className="text-gray-500 mb-6">
          Gestiona todas tus citas
        </p>

        {citas.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">

            {citas.map((cita, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-5">

                <span className="bg-yellow-400 text-xs px-2 py-1 rounded">
                  Confirmada
                </span>

                <h3 className="mt-3 font-semibold text-lg">
                  {cita.servicio.nombre}
                </h3>

                <div className="mt-3 space-y-2 text-sm text-gray-600">

                  <p className="flex items-center gap-2">
                    <FiUser /> {cita.barbero.nombre}
                  </p>

                  <p className="flex items-center gap-2">
                    <FiCalendar />
                    {new Date(cita.fecha).toLocaleDateString("es-MX")}
                  </p>

                  <p className="flex items-center gap-2">
                    <FiClock /> {cita.hora}
                  </p>

                  <p className="flex items-center gap-2">
                    <FiScissors /> {cita.servicio.duracion}
                  </p>
                </div>

                <div className="mt-4 border-t pt-3">
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="font-semibold">
                    ${cita.servicio.precio.toLocaleString()}
                  </p>
                </div>

            
                <div className="mt-4 space-y-2">

                  <button
                    onClick={() => handlePDF(cita)}
                    className="w-full bg-black text-yellow-400 py-2 rounded-lg"
                  >
                    Descargar comprobante
                  </button>

                  <button
                    onClick={() => setModal(index)}
                    className="w-full bg-red-600 text-white py-2 rounded-lg"
                  >
                    Cancelar Cita
                  </button>

                </div>

              </div>
            ))}

          </div>
        ) : (
          <div className="text-center mt-20">
            <p className="text-gray-500 mb-4">
              No tienes citas agendadas
            </p>

            <button
              onClick={() => navigate("/agendar")}
              className="bg-black text-yellow-400 px-6 py-2 rounded-lg"
            >
              Agendar Nueva Cita
            </button>
          </div>
        )}

        {modal !== null && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="bg-white rounded-xl p-6 w-80 shadow-lg">

              <h3 className="font-semibold text-lg mb-2">
                ¿Cancelar cita?
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Esta acción no se puede deshacer
              </p>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setModal(null)}
                  className="px-4 py-2 border rounded"
                >
                  No
                </button>

                <button
                  onClick={() => eliminarCita(modal)}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Sí, cancelar
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default MisCitas;