import React from "react";
import { useNavigate } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import CorteClasico from '../assets/clasico.jpg'

const servicios = [
  {
    id: 1,
    nombre: "Corte Clásico",
    descripcion: "Corte tradicional con tijera y máquina",
    precio: "$120",
    duracion: "30 min",
    img: CorteClasico
  },
  {
    id: 2,
    nombre: "Corte y Barba",
    descripcion: "Corte completo más perfilado y arreglo de barba",
    precio: "$170",
    duracion: "20 - 45 min",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
  },
  {
    id: 3,
    nombre: "Corte, Barba y Ceja",
    descripcion: "Servicio completo que incluye corte de cabello, arreglo de barba y perfilado de ceja para un look limpio y definido",
    precio: "$190",
    duracion: "30 - 60 min",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a"
  },
  {
    id: 4,
    nombre: "PAQUETE VIP",
    descripcion: "Corte, barba, ceja y facial completo para un estilo impecable",
    precio: "$420",
    duracion: "60 min",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    id: 5,
    nombre: "Barba",
    descripcion: "Arreglo y diseño de barba con acabado limpio y preciso",
    precio: "$80",
    duracion: "30 min",
    img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486"
  },
  {
    id: 6,
    nombre: "Corte Dama",
    descripcion: "Corte de dama personalizado para resaltar tu estilo y belleza natural",
    precio: "$150",
    duracion: "30 min",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552"
  },
  {
    id: 7,
    nombre: "Depilación",
    descripcion: "Depilación precisa para un acabado limpio y duradero",
    precio: "$50",
    duracion: "30 min",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552"
  },
  {
    id: 8,
    nombre: "Ceja y Bigote",
    descripcion: "Perfilado de ceja y bigote para un acabado limpio y definido",
    precio: "$80",
    duracion: "30 min",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552"
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* TÍTULO */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Nuestros Servicios
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Ofrecemos una amplia gama de servicios profesionales para que luzcas impecable
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition"
            >
              {/* IMAGEN */}
              <img
                src={`${servicio.img}?auto=format&fit=crop&w=800&q=80`}
                alt={servicio.nombre}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {servicio.nombre}
                  </h3>

                  <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">
                    {servicio.precio}
                  </span>
                </div>

                {/* DESCRIPCIÓN */}
                <p className="text-sm text-gray-500 mb-4">
                  {servicio.descripcion}
                </p>

                {/* INFO */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <FiClock />
                  <span>{servicio.duracion}</span>
                </div>

                {/* BOTÓN */}
                <button
                  onClick={() =>
                    navigate("/agendar", {
                      state: { servicio }
                    })
                  }
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 rounded-lg transition"
                >
                  Agendar Este Servicio
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Services;