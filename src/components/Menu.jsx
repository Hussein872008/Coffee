import { img1, img2, img3, img4, img5, imgHero } from "../assets";

const Menu = () => {
  const Data = [
    {
      id: 1,
      title: "Hot Beverages",
      desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
      img: img1,
    },
    {
      id: 2,
      title: "Cold Brews",
      desc: "Our carefully crafted cold brews offer a smooth, refreshing taste perfect for warm days or whenever you need a cool caffeine boost.",
      img: img2,
    },
    {
      id: 3,
      title: "Specialty Drinks",
      desc: "Unique blends and creative combinations that will surprise your taste buds with every sip.",
      img: img3,
    },
    {
      id: 4,
      title: "Seasonal Favorites",
      desc: "Limited-time offerings that capture the essence of each season's flavors and aromas.",
      img: img4,
    },
    {
      id: 5,
      title: "Signature Blends",
      desc: "Our exclusive house blends that have made us famous among coffee enthusiasts.",
      img: imgHero,
    },
    {
      id: 6,
      title: "Decaf Options",
      desc: "All the flavor you love without the caffeine, perfect for evening enjoyment.",
      img: img5,
    },
  ];

  return (
    <div className="bg-[#252525] py-20 px-[50px]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">Our Menu</h1>
          <div className="bg-orange-400 w-[100px] h-[2px] mt-4"></div>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
          {Data.map((item) => (
            <div
              key={item.id}
              className="bg-[#1e1e1e] p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg hover:shadow-orange-400/20 hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 sm:h-48 object-contain rounded-md mb-3 sm:mb-4"
              />
              <h2 className="text-lg sm:text-xl text-white font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
