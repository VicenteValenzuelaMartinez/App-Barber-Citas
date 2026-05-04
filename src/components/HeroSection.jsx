import React from "react";
import { useNavigate } from "react-router-dom";
import barberLogo from "../assets/logo.png";
import barberImg from "../assets/barber.jpeg";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      <img
        src={barberImg}
        alt="Barber"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col justify-start min-h-screen pt-16 md:pt-22 px-6 sm:px-10 md:px-20 text-white max-w-2xl">

        <div className="mb-4 w-16 sm:w-20 md:w-28 lg:w-32">
          <img
            src={barberLogo}
            alt="logo"
            className="w-full object-contain opacity-90"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
          Tu Estilo
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-white/90 tracking-wide mt-2">
          Nuestra Pasión
        </h2>

        
        <div className="mt-4 w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A227] rounded-full"></div>

      
        <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-md">
          Reserva tu cita en pocos pasos y mantén tu estilo siempre impecable.
        </p>

    
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

        
          <button
            onClick={() => navigate("/agendar")}
            className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A227] text-black px-6 py-3 rounded-md font-semibold hover:from-[#C9A227] hover:to-[#B8961E] transition shadow-lg"
          >
            Agendar Cita
          </button>

      
          <button
            onClick={() => navigate("/servicios")}
            className="w-full sm:w-auto bg-white text-[#D4AF37] border border-white px-6 py-3 rounded-md font-bold text-base sm:text-lg tracking-wide hover:bg-gradient-to-r hover:from-[#D4AF37] hover:via-[#FFD700] hover:to-[#C9A227] hover:text-black transition shadow-md"
          >
            Ver Servicios
          </button>

        </div>

      
        <div className="mt-6 flex gap-5 text-xl">

          <a
            href="https://www.instagram.com/efrainfranco50?igsh=MXRnZzdxMnk5YXQ0NQ=="
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full transition hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:scale-110"
          >
            <FaInstagram className="text-white" />
          </a>

          <a
            href="https://www.facebook.com/share/18hQcXbEsW/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full transition hover:bg-blue-600 hover:scale-110"
          >
            <FaFacebookF className="text-white" />
          </a>

         
        </div>
      </div>

      <a
        href="https://www.facebook.com/share/18hQcXbEsW/?mibextid=wwXIfr"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 right-5 z-20 bg-[#1877F2] p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaFacebookF className="text-white text-xl" />
      </a>

    </section>
  );
}