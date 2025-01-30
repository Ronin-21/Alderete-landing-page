import ReactPlayer from "react-player";
import alegraLogo from "../../assets/logo_alegra.webp";
import alegraPortada from "../../assets/alegra_portada.webp";

const Alegra = () => {
  return (
    <div className="flex items-center justify-center pb-40 bg-gray-100 pt-60">
      <div className="container flex flex-col items-center justify-center gap-40">
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col items-start justify-center gap-10">
            <div>
              <img src={alegraLogo} alt="flexxus logo" className="h-20 mb-3" />
              <p className="text-2xl font-semibold font-title text-primary-dark">
                Software de Gestión y Facturación
              </p>
            </div>
            <p>
              Más de 40.000 pymes en Argentina usan Alegra para ganar tiempo y
              tranquilidad. Alegra es un software de gestión y facturación en la
              nube diseñado para simplificar las operaciones de pequeñas y
              medianas empresas (pymes) y autónomos. Ofrece una solución
              integral que abarca desde la facturación electrónica hasta el
              control de inventarios y la gestión contable. Alegra es una
              herramienta integral que facilita la gestión financiera y
              administrativa de pymes y autónomos, optimizando procesos y
              asegurando el cumplimiento de las normativas fiscales vigentes.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
              Solicitar una demo
            </button>
          </div>
          <img src={alegraPortada} alt="portada" className="max-w-2xl" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="max-w-2xl text-5xl font-semibold text-center font-title text-primary-dark">
            Con Alegra le das más superpoderes a tu negocio
          </p>
          <p className="max-w-4xl text-xl text-center">
            Con Alegra tenés el control detallado de tu negocio: Facturá,
            gestioná tu stock y mirá reportes de ventas de forma ágil y
            sencilla.
          </p>
          <ReactPlayer
            url={"https://youtu.be/I30x85vYXLU?si=pActmta_GAeoYPob"}
            playing={false}
            width="1080px"
            height="720px"
          />
        </div>
      </div>
    </div>
  );
};

export default Alegra;
