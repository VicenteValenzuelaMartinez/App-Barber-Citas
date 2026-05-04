import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaScissors } from "react-icons/fa6";

const servicios = [
  {
    id: 1,
    nombre: "Corte Clásico",
    descripcion: "Corte tradicional con tijera y máquina",
    duracion: "30 minutos",
    precio: 120,
  },
  {
    id: 2,
    nombre: "Corte y Barba",
    descripcion: "Corte completo más perfilado y arreglo de barba",
    duracion: "20 - 45 minutos",
    precio: 170,
  },
  {
    id: 3,
    nombre: "Corte, Barba y Ceja",
    descripcion: "Servicio completo que incluye corte de cabello, arreglo de barba y perfilado de ceja para un look limpio y definido",
    duracion: "30 - 60 minutos",
    precio: 190,
  },
  {
    id: 4,
    nombre: "PAQUETE VIP",
    descripcion: "Corte, barba, ceja y facial completo para un estilo impecable",
    duracion: "60 minutos",
    precio: 420,
  },
  {
    id: 5,
    nombre: "Barba",
    descripcion: "Arreglo y diseño de barba con acabado limpio y preciso",
    duracion: "30 minutos",
    precio: 80,
  },
  {
    id: 6,
    nombre: "Corte Dama",
    descripcion: "Corte de dama personalizado para resaltar tu estilo y belleza natural",
    duracion: "30 minutos",
    precio: 150,
  },
  {
    id: 7,
    nombre: "Depilación",
    descripcion: "Depilación precisa para un acabado limpio y duradero",
    duracion: "30 minutos",
    precio: 50,
  },
  {
    id: 8,
    nombre: "Ceja y Bigote",
    descripcion: "Perfilado de ceja y bigote para un acabado limpio y definido",
    duracion: "30 minutos",
    precio: 80,
  },
];

const steps = ["Servicio", "Fecha", "Barbero", "Confirmar"];

export default function AgendarCita() {
  const [seleccionado, setSeleccionado] = useState(null);
  const navigate = useNavigate();

  const currentStep = 0;

  const handleContinuar = () => {
    if (!seleccionado) return;

    navigate("/agendar/time", {
      state: {
        servicio: seleccionado
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">

        {/* STEPPER */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between text-[10px] sm:text-xs mb-2">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mb-1 transition-all
                  ${index <= currentStep ? "bg-black" : "bg-gray-300"}`}
                />
                <span
                  className={`text-center leading-tight ${
                    index <= currentStep
                      ? "text-black font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
            <div
              className="h-2 bg-black rounded-full transition-all duration-300"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* TITULO */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Agendar Cita
        </h1>

        {/* SUBTITULO */}
        <h2 className="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2">
          <FaScissors className="text-black" />
          Selecciona un Servicio
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              onClick={() => setSeleccionado(servicio)}
              className={`relative cursor-pointer rounded-xl border p-4 transition-all duration-300 bg-white
              ${
                seleccionado?.id === servicio.id
                  ? "border-yellow-500 shadow-lg scale-[1.02] ring-2 ring-yellow-200"
                  : "border-gray-200 hover:border-yellow-400 hover:shadow-sm active:scale-[0.99]"
              }`}
            >
              {/* INDICADOR */}
              {seleccionado?.id === servicio.id && (
                <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-yellow-500 rounded-full animate-pulse" />
              )}

              {/* HEADER */}
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="font-semibold text-sm sm:text-base">
                  {servicio.nombre}
                </h3>

                <span className="bg-black text-yellow-400 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-lg whitespace-nowrap">
                  ${servicio.precio.toLocaleString()}
                </span>
              </div>

              {/* DESCRIPCION */}
              <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                {servicio.descripcion}
              </p>

              {/* DURACION */}
              <p className="text-[11px] sm:text-xs text-gray-500 mt-2">
                ⏱ {servicio.duracion}
              </p>
            </div>
          ))}
        </div>

        {/* BOTON */}
        <div className="flex justify-end mt-6">
          <button
            disabled={!seleccionado}
            onClick={handleContinuar}
            className={`w-full sm:w-auto px-6 py-3 sm:py-2 rounded-lg font-medium transition-all
            ${
              seleccionado
                ? "bg-black text-yellow-400 hover:opacity-90"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continuar
          </button>
        </div>

      </div>
    </div>
  );
}