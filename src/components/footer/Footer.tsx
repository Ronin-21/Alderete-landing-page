import facebook from "../../assets/brand-facebook.svg";
import instagram from "../../assets/brand-instagram.svg";
import tiktok from "../../assets/brand-tiktok.svg";
import whatsapp from "../../assets/brand-whatsapp.svg";
import logo from "../../assets/logo_icon.jpg";

const Footer = () => {
  return (
    <div className="py-10 mt-10">
      <div className="container flex flex-col items-center justify-center h-full gap-4 mx-auto">
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-gray-600 max-w-60">
              En{" "}
              <span className="font-semibold text-primary">
                Alderete Informática y Soporte
              </span>
              , trabajamos para garantizar que tus sistemas sean confiables,
              seguros y eficientes. Confía en nosotros para tus necesidades
              tecnológicas.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="p-1 rounded-md bg-primary-light hover:bg-primary"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="p-1 rounded-md bg-primary-light hover:bg-primary"
                />
              </a>
              <a href="#" aria-label="TikTok">
                <img
                  src={tiktok}
                  alt="TikTok"
                  className="p-1 rounded-md bg-primary-light hover:bg-primary"
                />
              </a>
            </div>
          </div>
          <img
            src={logo}
            alt="Logo de Alderete Informática y Soporte"
            className="h-[150px]"
          />
          <div className="flex flex-col items-start gap-4">
            <p className="text-xl font-semibold text-primary">
              Agenda una demo
            </p>
            <p className="text-sm text-gray-400 max-w-[250px]">
              Descubre cómo podemos optimizar tu infraestructura tecnológica.
              Contáctanos para una consulta personalizada.
            </p>
            <button className="flex items-center justify-center gap-2 py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
              <img src={whatsapp} alt="Whatsapp" />
              <p>Contáctanos</p>
            </button>
          </div>
        </div>
        <div className="w-full mt-6 border-b border-primary-dark/50"></div>
        <p className="text-sm text-gray-500">
          © 2025 Alderete Informática y Soporte. Todos los derechos reservados.{" "}
          <a href="#" className="text-primary hover:underline">
            Política de Privacidad
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
