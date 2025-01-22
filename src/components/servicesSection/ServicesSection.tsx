import img1 from "../../assets/services_1.jpg";
import img2 from "../../assets/card_icon.svg";

const ServicesSection = () => {
  return (
    <div className="pt-24 pb-32 bg-background" id="about">
      <div className="container flex items-center justify-around mx-auto">
        <div className="max-w-[600px] flex flex-col items-start gap-8">
          <p className="text-3xl font-semibold font-title text-primary-dark">
            Life coaching is about helping you get unstuck
          </p>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo enim
            aspernatur praesentium exercitationem at. Explicabo culpa iusto
            aspernatur nulla quam. Rerum commodi voluptate voluptatibus veniam
            ipsam deserunt at similique saepe!
          </p>
          <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
            Contáctanos
          </button>
        </div>
        <div className="relative">
          <img src={img1} alt="" className="w-full shadow-xl rounded-xl" />
          <div className="h-[250px] w-[500px] shadow-xl rounded-xl flex flex-col items-center justify-between p-5 absolute -bottom-14 -left-12 bg-white">
            <img src={img2} alt="" className="h-14" />
            <p className="text-xl font-semibold font-title text-primary-dark">
              Professional & Experienced Coaching
            </p>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus possimus quisquam voluptatem nam iste mollitia
              magnam iure sint temporibus, harum inventore, nihil molestias
              provident illum tempora culpa voluptatibus eveniet expedita?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
