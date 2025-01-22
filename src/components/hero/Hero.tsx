const Hero = () => {
  return (
    <div className="min-h-dvh bg-cover bg-center bg-[url('assets/hero_bg2.jpg')] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-transparent">
        <div className="container flex flex-col items-start justify-center h-full gap-12 mx-auto text-white">
          <p className="text-6xl font-bold font-title max-w-[800px]">
            Soluciones Tecnológicas para Empresas Inteligentes
          </p>
          <p className="max-w-[600px] text-xl">
            Expertos en implementación y mantenimiento de software. Nos
            aseguramos que tu tecnología esté siempre lista para impulsar tu
            negocio. Confía en nosotros para un soporte confiable y profesional.
          </p>
          <button className="py-3 mt-5 font-semibold text-white transition-all bg-transparent border-2 shadow-2xl px-7 rounded-3xl hover:bg-accent hover:text-primary-dark hover:border-primary-dark">
            Agenda una Consulta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
