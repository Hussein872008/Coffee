const ContactUs = () => {
  return (
    <div className="p-10 bg-[#3F181C] flex gap-10 flex-wrap md:flex-nowrap">
      <div className="bg-[#222222] container mx-auto p-6 rounded-lg shadow-lg w-full md:w-2/3">
        <h1 className="text-2xl font-bold mb-2 text-[#e18732]">
          Need Help? Open a Ticket
        </h1>
        <p className="text-white mb-4">
          Our support team will get back to you ASAP via email.
        </p>
        <div className=" sml:gap-10 grid grid-cols-1 sml:grid-cols-2">
            <div>
                <label className="block text-[#9d9d9d] font-semibold mb-1">
                Your Name
                </label>
                <input
                required
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-2  bg-[#4F2A2D] text-white rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            </div>

            <div>
                <label className="block text-[#9d9d9d] font-semibold mb-1">
                Your Email
                </label>
                <input
                required
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-2 bg-[#4F2A2D] text-white rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            </div>
        </div>
        
        <label className="block text-[#9d9d9d] font-semibold mb-1">
          Your Message
        </label>
        <textarea
          placeholder="Write your message here..."
          className="w-full p-2 bg-[#4F2A2D] text-white rounded-lg mb-3 h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
        ></textarea>
        <button type="submit" className="w-44 bg-[#ff7206] text-white font-semibold p-3 rounded-full hover:bg-orange-600 transition duration-300">
          Submit Ticket
        </button>
      </div>

      <div className="bg-[#222222] p-6 flex flex-col justify-center rounded-lg shadow-lg w-full md:w-1/3">
        <h1 className="text-2xl text-[#e18732] font-bold mb-2">
          Subscribe to receive future updates
        </h1>
        <p className="text-white mb-4 pb-5">
          Stay updated with our latest news and offers by subscribing to our
          newsletter.
        </p>
        <p className="h-[1px] w-full my-4 bg-gray-700"></p>

        <input
          required
          type="text"
          placeholder="Enter Your Name"
          className="w-full p-2 bg-[#4F2A2D] mt-10 text-white rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          required
          type="email"
          placeholder="Enter Your Email"
          className="w-full p-2 bg-[#4F2A2D] text-white rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button type="submit" className="w-full bg-[#ff7206] text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
