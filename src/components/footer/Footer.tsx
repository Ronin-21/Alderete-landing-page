import facebook from "../../assets/brand-facebook.svg";
import instagram from "../../assets/brand-instagram.svg";
import tiktok from "../../assets/brand-tiktok.svg";
import map from "../../assets/map-pin.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import logo from "/public/logo_icon.jpg";

const Footer = () => {
  return (
    <div className="py-10">
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
          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium text-primary">Contacto</p>
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
          </div>
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
