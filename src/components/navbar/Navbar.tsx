import { useState } from "react";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/down-arrow.svg";
import logoWhite from "../../assets/logo_white.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Función para desplazarse a una sección
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id); // Obtenemos el elemento por ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Función para volver al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed z-20 flex items-center justify-center w-full text-lg shadow-xl bg-primary">
      <div className="container flex items-center justify-between p-4 text-white">
        <Link to="/" className="flex items-center">
          <img src={logoWhite} alt="logo" className="h-16" />
        </Link>
        <div className="relative flex items-center gap-10 justify-evenly">
          <button onClick={() => scrollToTop()}>
            <Link to={"/"}>Inicio</Link>
          </button>
          <button
            className="flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => {
              setOpen(true);
            }}
            onMouseLeave={() => {
              setOpen(false);
            }}
          >
            Soluciones
            <img src={arrowDown} alt="" className="w-6" />
          </button>
          <button onClick={() => scrollToSection("about")}>
            <Link to={"/"}>Acerca de nosotros</Link>
          </button>
          <button onClick={() => scrollToSection("services")}>
            <Link to={"/"}>Servicios</Link>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer"
          >
            <Link to={"/"}>Contacto</Link>
          </button>
          <div
            onMouseEnter={() => {
              setOpen(true);
            }}
            onMouseLeave={() => {
              setOpen(false);
            }}
            className={`absolute top-full left-0 px-7 py-5 bg-primary rounded-b-lg gap-2 items-center justify-evenly shadow-lg w-full h-48 transition-all ${
              open ? "flex" : "hidden"
            }`}
          >
            <Link to="/sistems/flexxus">Flexxus</Link>
            <Link to="/sistems/fudo">Fudo</Link>
            <Link to="/sistems/alegra">Alegra</Link>
            <Link to="/sistems/wubook">WuBook</Link>
            <Link to="/sistems/facil-virtual">Facil Virtual</Link>
          </div>
        </div>

        {/* <button className="py-3 font-semibold bg-white shadow-xl px-7 rounded-3xl text-primary">
          Solicita una Cotización
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
