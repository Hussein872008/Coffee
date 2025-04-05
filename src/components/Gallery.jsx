import {
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
} from "../assets";

const Gallery = () => {
    const Images = [
        { id: 1, img: gallery1 },
        { id: 2, img: gallery2 },
        { id: 3, img: gallery3 },
        { id: 4, img: gallery4 },
        { id: 5, img: gallery5 },
        { id: 6, img: gallery6 },
    ];
    
    return (
        <div className="bg-[#252525] py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">Gallery</h1>
          <div className="bg-orange-400 w-[100px] h-[2px] mt-4"></div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Images.map((img) => (
                        <div 
                            key={img.id} 
                            className="overflow-hidden rounded-xl shadow-md hover:shadow-orange-400/50 transition-all duration-300"
                        >
                            <img 
                                src={img.img} 
                                alt={`Gallery image ${img.id}`}
                                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
