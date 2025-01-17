import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo_white.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-20 flex items-center justify-center w-full shadow-xl bg-primary bg-opacity-90 backdrop-blur-sm">
      <div className="container flex items-center justify-between p-4 text-white">
        <Link to="/" className="flex items-center">
          <img src={logoWhite} alt="logo" className="h-16" />
        </Link>
        <div className="flex items-center gap-10 justify-evenly">
          <Link to="/">Inicio</Link>
          <div className="relative">
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              Soluciones
            </button>
            <div
              className={`absolute -bottom-[200%] left-1/2 px-7 py-5 bg-primary/90 rounded-lg gap-2 flex-col items-center justify-evenly shadow-lg ${
                open ? "flex" : "hidden"
              }`}
            >
              <Link to="/">Flexxus</Link>
              <Link to="/">Fudo</Link>
              <Link to="/">Alegra</Link>
              <Link to="/">WuBook</Link>
              <Link to="/">Facil Virtual</Link>
            </div>
          </div>
          <Link to="/">Acerca de nosotros</Link>
          <Link to="/">Servicios</Link>
          <Link to="/">Contacto</Link>
        </div>

        <button className="py-3 font-semibold bg-white shadow-xl px-7 rounded-3xl text-primary">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
