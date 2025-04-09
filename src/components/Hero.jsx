import { imgHero } from "../assets";

const Hero = () => {
  return (
    <div className="bg-[#3F181C] py-20 px-4 sm:px-8 lg:px-[50px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Content */}
        <div className="text-white flex flex-col gap-6 max-w-lg">
          <h1 className="text-4xl font-bold font-mono text-orange-300">
            Best Coffee
          </h1>
          <h2 className="text-4xl font-bold">
            Make Your Day Great With Our Special Coffee
          </h2>
          <p className="text-lg">
            Welcome to our coffee paradise, where every bean tells a story and
            every cup sparks joy.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-transparent hover:text-orange-500 border-2 border-orange-500 transition duration-300">
              Order Now
            </button>
            <button className="bg-transparent text-white px-6 py-3 rounded-full font-medium border-2 border-white transition duration-300 hover:text-orange-500 hover:border-orange-500">
              Contact Us
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={imgHero}
            alt="Hero Coffee"
            className="w-full max-w-md object-cover  "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
