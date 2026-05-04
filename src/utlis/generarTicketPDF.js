import jsPDF from "jspdf";
import barberLogo from "../assets/logo.png";

const cargarImagen = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      resolve(canvas.toDataURL("image/png"));
    };
  });
};

export const generarTicketPDF = async (cita) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: [80, 200]
  });

  const pageWidth = doc.internal.pageSize.getWidth();


  const logoBase64 = await cargarImagen(barberLogo);

  
  const logoWidth = 50;
  const logoHeight = 25;

  doc.addImage(
    logoBase64,
    "PNG",
    (pageWidth - logoWidth) / 2,
    5,
    logoWidth,
    logoHeight
  );

  
  let yStart = 35;


  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("BARBER SHOP", pageWidth / 2, yStart, { align: "center" });

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Franco Martinez", pageWidth / 2, yStart + 5, {
    align: "center"
  });

  doc.line(5, yStart + 8, 75, yStart + 8);

  
  doc.text(`Cliente: ${cita.nombre}`, 5, yStart + 15);
  doc.text(`Tel: ${cita.telefono}`, 5, yStart + 20);

  doc.line(5, yStart + 23, 75, yStart + 23);

  let y = yStart + 30;

  const row = (label, value) => {
    doc.setFont("helvetica", "bold");
    doc.text(label, 5, y);

    doc.setFont("helvetica", "normal");
    doc.text(String(value), 75, y, { align: "right" });

    y += 6;
  };

  
  row("Servicio:", cita.servicio.nombre);
  row("Barbero:", cita.barbero.nombre);
  row(
    "Fecha:",
    new Date(cita.fecha).toLocaleDateString("es-MX")
  );
  row("Hora:", cita.hora);
  row("Duración:", cita.servicio.duracion);

  doc.line(5, y, 75, y);
  y += 6;


  doc.setFont("helvetica", "bold");
  doc.text("TOTAL:", 5, y);

  doc.text(
    `$${cita.servicio.precio.toLocaleString()}`,
    75,
    y,
    { align: "right" }
  );

  y += 12;


  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.setFont("helvetica", "normal");

  doc.text("Gracias por tu preferencia", pageWidth / 2, y, {
    align: "center"
  });

  doc.text("Te esperamos pronto", pageWidth / 2, y + 5, {
    align: "center"
  });

  
  doc.save(`cita-${cita.hora}.pdf`);
};