import sitemapIcon from "../../assets/sitemap.svg";

const MidBanner = () => {
  return (
    <div className="h-[600px] bg-cover bg-center bg-[url('assets/banner_1.jpg')] relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 bg-opacity-80 bg-primary-dark">
        <p className="text-5xl font-semibold text-white">
          Best Reasoned for choose our service
        </p>
        <div className="flex items-center justify-around gap-10">
          <div className="flex flex-col items-center justify-center gap-3 text-white w-[300px] text-center">
            <img
              src={sitemapIcon}
              alt=""
              className="h-24 p-3 bg-white rounded-full"
            />
            <p className="text-xl font-medium">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              sequi dignissimos neque inventore ratione, officiis exercitationem
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-white w-[300px] text-center">
            <img
              src={sitemapIcon}
              alt=""
              className="h-24 p-3 bg-white rounded-full"
            />
            <p className="text-xl font-medium">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              sequi dignissimos neque inventore ratione, officiis exercitationem
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-white w-[300px] text-center">
            <img
              src={sitemapIcon}
              alt=""
              className="h-24 p-3 bg-white rounded-full"
            />
            <p className="text-xl font-medium">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              sequi dignissimos neque inventore ratione, officiis exercitationem
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-white w-[300px] text-center">
            <img
              src={sitemapIcon}
              alt=""
              className="h-24 p-3 bg-white rounded-full"
            />
            <p className="text-xl font-medium">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              sequi dignissimos neque inventore ratione, officiis exercitationem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
