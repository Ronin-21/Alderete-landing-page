import user1 from "../../assets/user_1.jpg";

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-100 h-[700px] flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-20">
        <h4 className="text-5xl font-medium text-primary">
          Que dicen nuestros clientes
        </h4>
        <div className="flex items-center justify-center w-full gap-10 text-white">
          <div className="flex flex-col items-center p-4 shadow-2xl bg-primary rounded-2xl h-80 justify-evenly w-80">
            <img
              src={user1}
              alt="Shoes"
              className="object-cover object-center w-24 h-24 rounded-full"
            />
            <div className="flex flex-col items-center gap-5 text-lg text-center">
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit, Lorem
                ipsum dolor sit, amet consectetur adipisicing elit
              </p>
              <p className="text-xl font-semibold">Lorem ipsum</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 shadow-2xl bg-primary rounded-2xl h-80 justify-evenly w-80">
            <img
              src={user1}
              alt="Shoes"
              className="object-cover object-center w-24 h-24 rounded-full"
            />
            <div className="flex flex-col items-center gap-5 text-lg text-center">
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit, Lorem
                ipsum dolor sit, amet consectetur adipisicing elit
              </p>
              <p className="text-xl font-semibold">Lorem ipsum</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 shadow-2xl bg-primary rounded-2xl h-80 justify-evenly w-80">
            <img
              src={user1}
              alt="Shoes"
              className="object-cover object-center w-24 h-24 rounded-full"
            />
            <div className="flex flex-col items-center gap-5 text-lg text-center">
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
