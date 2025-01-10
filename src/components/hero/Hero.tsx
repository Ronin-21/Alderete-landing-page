const Hero = () => {
  return (
    <div className="min-h-dvh bg-cover bg-center bg-[url('assets/hero_bg2.jpg')] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-transparent">
        <div className="container flex flex-col items-start justify-center h-full gap-12 mx-auto text-white">
          <p className="text-5xl font-semibold">Welcome to our website</p>
          <p className="max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            officiis alias assumenda sit quasi, beatae, velit, officia suscipit
            commodi recusandae accusantium. Aperiam, consequuntur nisi sed
            reprehenderit cum facere quibusdam aliquam.
          </p>
          <button className="py-3 mt-5 font-semibold text-white transition-all bg-transparent border-2 shadow-2xl px-7 rounded-3xl hover:bg-white hover:text-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
