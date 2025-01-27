import store from "../../assets/building-store.svg";
import mail from "../../assets/mail-white.svg";
import map from "../../assets/map-pin-white.svg";
import phone from "../../assets/phone-white.svg";

const ContactSection = () => {
  // Enviar el formulario de contacto con Formsubmit
  // Handle submit con fetch y useForm Hook
  /* const onSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);

  // Send data to email address
  fetch('https://formsubmit.co/ajax/ale_lasarte@hotmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formState),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setIsLoading(false);
        setMessageModal(data.message);
        handleClose();
        onResetForm();
      }
    })
    .catch((error) => console.log(error));
}; */

  return (
    <div
      className="h-[800px] bg-cover bg-center bg-[url('assets/contact_bg.jpg')] relative"
      id="contact"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 bg-opacity-50 shadow-xl bg-primary-dark">
        <div className="flex items-center justify-center w-2/3 h-[600px] border border-white/40">
          <div className="flex items-center justify-center w-2/3 h-full p-20 bg-gradient-to-b from-primary to-transparent backdrop-blur-md">
            <div className="flex flex-col items-start justify-center w-full h-full gap-6">
              <p className="font-medium text-white uppercase font-title">
                Contact us
              </p>
              <p className="text-3xl font-semibold text-white font-title">
                Get In Touch
              </p>
              <form
                className="flex flex-col w-full gap-6"
                action="https://formspree.io/f/mldgjawq"
                method="POST"
              >
                <div className="flex w-full h-10 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="w-full p-3"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3"
                  />
                </div>
                <div className="flex w-full h-10 gap-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    className="w-full p-3"
                  />
                  <select className="w-full px-3">
                    <option value="">Selecciona un servicio</option>
                    <option value="flexxus">Flexxus</option>
                    <option value="alegra">Alegra</option>
                    <option value="wubook">WuBook</option>
                    <option value="fudo">Fudo</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  className="h-32 p-3"
                  placeholder="Cuéntanos tu problema"
                ></textarea>
                <input type="hidden" name="_captcha" value="false"></input>
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:5173/"
                ></input>
                <button
                  type="submit"
                  className="self-start py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/3 h-full px-10 py-14 bg-gradient-to-b from-white to-transparent backdrop-blur-md">
            <div className="flex flex-col items-start justify-start w-full h-full gap-10">
              <p className="text-3xl font-semibold font-title">Contácto</p>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <img
                    src={map}
                    alt=""
                    className="p-3 rounded-full bg-primary"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-medium">Dirección</p>
                    <p>Ara Gral Belgrano 56</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={phone}
                    alt=""
                    className="p-3 rounded-full bg-primary"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-medium">Teléfonos</p>
                    <p>+54 9 3858 458253</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={mail}
                    alt=""
                    className="p-3 rounded-full bg-primary"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-medium">Email</p>
                    <p>contacto@aldereteinformatica.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={store}
                    alt=""
                    className="p-3 rounded-full bg-primary"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-medium">Horarios de Atención</p>
                    <p>Lunes a Viernes: 8:00 am - 5:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
