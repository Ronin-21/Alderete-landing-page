import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo_white.png";

const Navbar = () => {
  return (
    <div className="fixed z-20 flex items-center justify-center w-full bg-primary">
      <div className="container flex items-center justify-between p-4 text-white">
        <Link to="/" className="flex items-center">
          <img src={logoWhite} alt="logo" className="h-16" />
        </Link>
        <div className="flex items-center gap-10">
          <Link to="/">Inicio</Link>
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
