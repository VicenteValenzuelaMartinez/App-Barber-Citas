import { IoHomeOutline } from "react-icons/io5";
import { GrCatalogOption } from "react-icons/gr";
import { CiCalendar, CiCircleList, CiUser } from "react-icons/ci";

export const menuItems = [
  { icon: IoHomeOutline, label: 'Inicio', path: '/'},
  { icon: GrCatalogOption, label: 'Servicios', path: '/servicios'  },
  { icon: CiCalendar, label: 'Agendar', path: '/agendar' },
  { icon: CiCircleList, label: 'Mis Citas', path: '/citas' },
];