import flexxusLogo from "../../assets/logo_flexxus.png";
import flexxusPortada from "../../assets/flex_portada.png";
import ReactPlayer from "react-player/youtube";

const Flexxus = () => {
  return (
    <div className="flex items-center justify-center pb-40 bg-gray-100 pt-60">
      <div className="container flex flex-col items-center justify-center gap-40">
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col items-start justify-center gap-10">
            <div>
              <img src={flexxusLogo} alt="flexxus logo" className="h-20" />
              <p className="text-2xl font-semibold font-title text-primary-dark">
                Sistema de Gestión ERP
              </p>
            </div>
            <p>
              Flexxus es el software de gestión ERP más elegido de Argentina,
              más de 5.000 empresas en todo el país eligen esta poderosa
              solución para gestionar sus negocios. Diseñado para optimizar la
              gestión interna, Flexxus ofrece una plataforma completa, flexible
              y fácil de usar que se adapta a las necesidades específicas de
              cada negocio. Brinda soluciones específicas para minoristas,
              manufactura , agroindustrias y más. Sus módulos incluyen
              facturación electrónica, CRM, inteligencia de negocios e
              integraciones ecommerces, entre otros.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
              Solicitar una demo
            </button>
          </div>
          <img src={flexxusPortada} alt="portada" className="max-w-3xl" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="max-w-xl text-5xl font-semibold text-center font-title text-primary-dark">
            Mucho más que un Software de Gestión ERP
          </p>
          <p className="max-w-4xl text-xl text-center">
            Estamos convencidos que la principal característica de un Software
            de Gestión ERP debe ser su simpleza y facilidad de uso, y este es
            nuestro principal logro.
          </p>
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=iadZRRdow4U"}
            playing={false}
            width="1080px"
            height="720px"
          />
        </div>
      </div>
    </div>
  );
};

export default Flexxus;
