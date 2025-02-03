import { useState } from "react";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/down-arrow.svg";
import logoWhite from "../../assets/logo_white.png";
import logoFlexxus from "../../assets/logo_flexxus.png";
import logoFudo from "../../assets/logo_fudo.svg";
import logoAlegra from "../../assets/logo_alegra.webp";
import logoWubook from "../../assets/logo_wubook.png";
import logoFacil from "../../assets/logo_facil-virtual.png";

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
      <div className="container relative flex items-center justify-between h-20 text-white">
        <Link to="/" className="flex items-center">
          <img src={logoWhite} alt="logo" className="h-16" />
        </Link>
        <div className="relative flex items-center h-full gap-10 justify-evenly">
          <button onClick={() => scrollToTop()}>
            <Link to={"/"}>Inicio</Link>
          </button>
          <button
            className="flex items-center h-full gap-1 cursor-pointer"
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
        </div>
        <div
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
          className={`absolute top-full right-0 px-7 py-5 bg-white rounded-b-lg gap-2 items-center justify-evenly shadow-lg w-[900px] h-48 transition-all ${
            open ? "flex" : "hidden"
          }`}
        >
          <Link to="/sistems/flexxus">
            <img src={logoFlexxus} alt="logo flexxus" className="h-10" />
          </Link>
          <Link to="/sistems/fudo">
            <img src={logoFudo} alt="logo fudo" className="h-8" />
          </Link>
          <Link to="/sistems/alegra">
            <img src={logoAlegra} alt="logo alegra" className="h-10" />
          </Link>
          <Link to="/sistems/wubook">
            <img src={logoWubook} alt="logo wubook" className="h-10 invert" />
          </Link>
          <Link to="/sistems/facil-virtual">
            <img src={logoFacil} alt="logo facil" className="h-10" />
          </Link>
        </div>

        <Link
          to={"https://alderete-informatica.odoo.com/web/login"}
          className="py-3 font-semibold bg-white shadow-xl px-7 rounded-3xl text-primary"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
