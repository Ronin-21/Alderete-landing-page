import cardIcon from "../../assets/Card_icon.svg";

const AboutSection = () => {
  return (
    <div className="h-[800px] flex items-center justify-center bg-gray-50">
      <div className="container flex flex-col items-center gap-14">
        <div className="flex flex-col items-center justify-center max-w-[600px] text-center gap-5">
          <p className="text-3xl font-semibold">What we do</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            officiis alias assumenda sit quasi, beatae, velit, officia suscipit
            commodi recusandae accusantium. Aperiam, consequuntur nisi sed
            reprehenderit cum facere quibusdam aliquam.
          </p>
        </div>
        <div className="flex items-center gap-10 justify-evenly">
          <div className="h-[400px] w-[300px] shadow-xl rounded-xl bg-white flex flex-col items-center justify-evenly p-5">
            <img src={cardIcon} alt="services" className="h-14" />
            <p className="text-xl font-semibold">Coaching Services</p>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis fugit optio nesciunt veritatis a eos ex quasi, ullam
              ipsum molestias cum eveniet doloremque, amet veniam, minus iste?
              Voluptates, odio. Delectus.
            </p>
            <button className="py-3 font-semibold text-white transition-all shadow-2xl bg-primary-light px-7 rounded-3xl hover:bg-primary">
              CTA
            </button>
          </div>
          <div className="h-[400px] w-[300px] shadow-xl rounded-xl flex flex-col items-center justify-evenly p-5">
            <img src={cardIcon} alt="services" className="h-14" />
            <p className="text-xl font-semibold">Coaching Services</p>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis fugit optio nesciunt veritatis a eos ex quasi, ullam
              ipsum molestias cum eveniet doloremque, amet veniam, minus iste?
              Voluptates, odio. Delectus.
            </p>
            <button className="py-3 font-semibold text-white transition-all shadow-2xl bg-primary-light px-7 rounded-3xl hover:bg-primary">
              CTA
            </button>
          </div>
          <div className="h-[400px] w-[300px] shadow-xl rounded-xl flex flex-col items-center justify-evenly p-5">
            <img src={cardIcon} alt="services" className="h-14" />
            <p className="text-xl font-semibold">Coaching Services</p>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis fugit optio nesciunt veritatis a eos ex quasi, ullam
              ipsum molestias cum eveniet doloremque, amet veniam, minus iste?
              Voluptates, odio. Delectus.
            </p>
            <button className="py-3 font-semibold text-white transition-all shadow-2xl bg-primary-light px-7 rounded-3xl hover:bg-primary">
              CTA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
