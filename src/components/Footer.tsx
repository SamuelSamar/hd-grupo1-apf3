

const Footer = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[400px]">
      {/* Imagen */}
      <div className="w-full md:w-1/2 h-72 md:h-auto">
        <img
          src="https://ftccollege.edu/wp-content/uploads/2023/08/barber-school.jpg"
          alt="Barber Contact"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Formulario */}
      <div className="w-full md:w-1/2 bg-[#2c2b2b] text-white p-8 flex flex-col text-xl">
        <h2 className="text-2xl md:text-6xl font-bold mb-10 text-white text-center">
          Contact Us!
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 rounded-sm text-black bg-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter a valid email address"
            className="w-full p-3 rounded-sm text-black bg-white"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full p-3 h-32 resize-none rounded-sm text-black bg-white"
            required
          />
          <button
            type="submit"
            className="w-full py-1 bg-[#b3ac84] text-white font-semibold rounded-2xl hover:opacity-90 transition text-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Footer;
