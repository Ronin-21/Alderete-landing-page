import user1 from "../../assets/user_1.jpg";

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-100 h-[700px] flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-20">
        <h4 className="text-5xl font-medium text-primary font-title">
          Que dicen nuestros clientes
        </h4>
        <div className="flex items-center justify-center w-full gap-10 text-black">
          <div className="flex flex-col items-center gap-10 p-4 bg-transparent justify-evenly w-80">
            <img
              src={user1}
              alt="Shoes"
              className="object-cover object-center w-40 h-40 border-2 rounded-full shadow-xl border-primary"
            />
            <div className="flex flex-col items-center gap-4 text-lg text-center">
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit, Lorem
                ipsum dolor sit, amet consectetur adipisicing elit
              </p>
              <p className="text-xl font-semibold">Lorem ipsum</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 p-4 bg-transparent justify-evenly w-80">
            <img
              src={user1}
              alt="Shoes"
              className="object-cover object-center w-40 h-40 border-2 rounded-full shadow-xl border-primary"
            />
            <div className="flex flex-col items-center gap-4 text-lg text-center">
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit, Lorem
                ipsum dolor sit, amet consectetur adipisicing elit
              </p>
              <p className="text-xl font-semibold">Lorem ipsum</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 p-4 bg-transparent justify-evenly w-80">
            <img
              src={user1}
              alt="Shoes"
              className="object-cover object-center w-40 h-40 border-2 rounded-full shadow-xl border-primary"
            />
            <div className="flex flex-col items-center gap-4 text-lg text-center">
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit, Lorem
                ipsum dolor sit, amet consectetur adipisicing elit
              </p>
              <p className="text-xl font-semibold">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
