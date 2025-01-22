import facebook from "../../assets/brand-facebook.svg";
import instagram from "../../assets/brand-instagram.svg";
import tiktok from "../../assets/brand-tiktok.svg";
/* import map from "../../assets/map-pin.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg"; */
import whatsapp from "../../assets/brand-whatsapp.svg";
import logo from "../../assets/logo_icon.jpg";

const Footer = () => {
  return (
    <div className="py-10 mt-10">
      <div className="container flex flex-col items-center justify-center h-full gap-4 mx-auto">
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-center text-primary max-w-60">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              corrupti odit cum saepe
            </p>
            <div className="flex items-center gap-4">
              <a href="#">
                <img
                  src={facebook}
                  alt=""
                  className="p-1 rounded-md bg-primary-light hover:bg-primary"
                />
              </a>
              <a href="#">
                <img
                  src={instagram}
                  alt=""
                  className="p-1 rounded-md bg-primary-light hover:bg-primary"
                />
              </a>
              <a href="#">
                <img
                  src={tiktok}
                  alt=""
                  className="p-1 rounded-md bg-primary-light hover:bg-primary"
                />
              </a>
            </div>
          </div>
          <img src={logo} alt="" className="h-[150px]" />
          <div className="flex flex-col items-start gap-4">
            <p className="text-xl font-semibold text-primary">
              Agenda una demo
            </p>
            <p className="text-sm text-gray-400 max-w-[250px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              repellat mollitia nobis minima id
            </p>
            <button className="flex items-center justify-center gap-2 py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
              <img src={whatsapp} alt="" />
              <p>Contáctanos</p>
            </button>
          </div>
          {/* <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-primary">Contacto</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img src={map} alt="" />
                <p>Sarmiento 512</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={phone} alt="" />
                <p>+54 9 3858 156235</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={mail} alt="" />
                <p>ejemplo@gmail.com</p>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 px-5 py-3 font-semibold text-white transition-all shadow-2xl rounded-xl bg-primary-light hover:bg-primary">
              <img src={whatsapp} alt="" />
              <p>Contáctanos</p>
            </button>
          </div> */}
        </div>
        <div className="w-full mt-6 border-b border-primary-dark/50"></div>
        <p className="text-sm text-gray-400">
          © 2021 All rights reserved. Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
