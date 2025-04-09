import { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);  // لحالة الإرسال
  const [errorMessage, setErrorMessage] = useState("");    // لإظهار رسائل الخطأ

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // تحقق بسيط من المدخلات
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required!");
      return;
    }

    setErrorMessage(""); // إعادة تعيين رسالة الخطأ

    // هنا يمكنك إضافة منطق لإرسال البيانات إلى الخادم أو التعامل مع الرسالة
    console.log("Message submitted:", formData);
    
    // بعد إرسال الرسالة
    setIsSubmitted(true);

    // إعادة تعيين النموذج بعد فترة قصيرة
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-[#3F181C]">
      <h1 className="text-3xl font-bold text-[#fd8718] pb-4">Support</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white">Contact Information</h2>
        <p className="text-gray-200">
          If you have any issues or questions, feel free to contact us. We are here to help.
        </p>
        <ul className="mt-4 text-gray-200">
          <li><strong>Email:</strong> husseinabdalla424@gmail.com</li>
          <li><strong>Phone:</strong> +201070334275</li>
        </ul>
      </section>

      {/* Form Section */}
      <section>
        <h2 className="text-xl font-semibold text-white">Send Us a Message</h2>
        {isSubmitted && <p className="text-green-500">Your message has been sent successfully!</p>}  {/* رسالة النجاح */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}  {/* رسالة الخطأ */}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="text-gray-200">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 text-gray-700 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 text-gray-700 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-gray-200">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 mt-2 text-gray-700 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#fd8718] text-white p-3 rounded-md mt-4 hover:bg-[#f08416] transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Support;
``
