const ContactSection = () => {
  return (
    <div className="h-[800px] bg-cover bg-center bg-[url('assets/contact_bg.jpg')] relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 bg-opacity-50 shadow-xl bg-primary-dark">
        <div className="flex items-center justify-center w-2/3 h-[600px] border border-white/40">
          <div className="flex items-center justify-center w-2/3 h-full p-20 bg-gradient-to-b from-primary to-transparent backdrop-blur-md">
            <div className="flex flex-col items-start justify-center w-full h-full gap-6">
              <p className="font-medium text-white uppercase">Contact us</p>
              <p className="text-3xl font-semibold text-white">Get In Touch</p>
              <form className="flex flex-col w-full gap-6">
                <div className="flex w-full h-10 gap-6">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-3"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3"
                  />
                </div>
                <div className="flex w-full h-10 gap-6">
                  <input
                    type="text"
                    placeholder="Teléfono"
                    className="w-full p-3"
                  />
                  <select className="w-full px-3">
                    <option value="0">Selecciona un servicio</option>
                    <option value="0">Flexxus</option>
                    <option value="0">Alegra</option>
                    <option value="0">WuBook</option>
                    <option value="0">Fudo</option>
                  </select>
                </div>
                <textarea
                  className="h-32 p-3"
                  placeholder="Cuéntanos tu problema"
                ></textarea>
              </form>
              <button className="py-3 font-semibold text-white transition-all rounded-md shadow-2xl bg-primary-light px-7 hover:bg-primary">
                Enviar
              </button>
            </div>
          </div>
          <div className="w-1/3 h-full bg-gradient-to-b from-white to-transparent backdrop-blur-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
