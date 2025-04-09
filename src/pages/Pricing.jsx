const Pricing = () => {
  const menuItems = [
    {
      name: "Espresso",
      price: "$3.00",
      description: "A strong and bold coffee made from finely ground espresso beans.",
    },
    {
      name: "Cappuccino",
      price: "$4.50",
      description: "Espresso with steamed milk and a layer of foam on top.",
    },
    {
      name: "Latte",
      price: "$5.00",
      description: "Espresso with steamed milk and a little foam.",
    },
    {
      name: "Americano",
      price: "$3.50",
      description: "Espresso diluted with hot water for a lighter taste.",
    },
    {
      name: "Mocha",
      price: "$5.50",
      description: "A rich espresso with chocolate syrup and steamed milk.",
    },
    {
      name: "Pastries",
      price: "$2.50 - $5.00",
      description: "Freshly baked pastries including croissants, muffins, and more.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-[#3F181C]">
      <h1 className="text-3xl font-bold text-[#fd8718] pb-4">Our Menu</h1>

      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white">Delicious Coffee & Pastries</h2>
        <p className="text-gray-200">
          Enjoy our freshly brewed coffee and delicious pastries. Perfect for any time of the day!
        </p>
      </section>

      {/* Menu Items */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg border-gray-400">
              <h3 className="text-2xl font-semibold text-[#fd8718]">{item.name}</h3>
              <p className="text-lg text-white">{item.price}</p>
              <p className="text-gray-200 mt-2">{item.description}</p>
              <button className="mt-6 w-full bg-[#fd8718] text-white p-3 rounded-md hover:bg-[#f08416] transition">
                Add to Order
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="mt-10 text-center">
        <h2 className="text-xl font-semibold text-[#fd8718] mb-4">Today's Special</h2>
        <p className="text-gray-200">Get 10% off on all pastries when you order a coffee!</p>
        <button className="mt-4 bg-[#fd8718] text-white p-3 rounded-md hover:bg-[#f08416] transition">
          Order Now
        </button>
      </section>
    </div>
  );
};

export default Pricing;
