import logoFlexxus from "../../assets/logo_flexxus.png";
import logoAlegra from "../../assets/logo_alegra.webp";
import logoFudo from "../../assets/logo_fudo.svg";
import logoWubook from "../../assets/logo_wubook.png";
import logoFacilVirtual from "../../assets/logo_facil-virtual.png";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <Marquee className="h-[200px]" pauseOnHover={true}>
      <img src={logoFlexxus} alt="logo_flexxus" className="h-14" />
      <img src={logoAlegra} alt="logo_alegra" className="h-14" />
      <img src={logoFudo} alt="logo_fudo" className="h-12" />
      <img src={logoFacilVirtual} alt="logo_fudo" className="h-14" />
      <img src={logoWubook} alt="logo_wubook" className="h-12 invert" />
    </Marquee>
  );
};

export default Banner;
