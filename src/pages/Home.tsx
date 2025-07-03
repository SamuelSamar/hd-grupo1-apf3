import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";

const leftColumn = [
  { service: "Regular Haircut", price: "$34+" },
  { service: "Haircut + Royal Shave", price: "$60+" },
  { service: "Beard Trim Machine", price: "$23+" },
  { service: "Haircut and Facial", price: "$50+" },
];

const rightColumn = [
  { service: "Royal Shave", price: "$35+" },
  { service: "Haircut + Beard Trim", price: "$65+" },
  { service: "Beard + Facial", price: "$55+" },
  { service: "Men’s Facial", price: "$25+" },
];

const Home = () =>{
    return(
        <>
        <Navbar />
      <section
        className="relative bg-cover bg-center py-50"
        style={{
          backgroundImage:
            "url('https://images.newrepublic.com/9bba0e56c589fb3e06191969202abb446327a86a.jpeg')",
        }}
      >
        <section className="bg-[#2c2b2b] text-white py-16">
 <section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Texto a la izquierda */}
    <div className="md:w-1/2 space-y-6 text-center md:text-left">
      <h1 className="text-lg uppercase tracking-wide text-gray-700 font-semibold">
        Welcome to
      </h1>
      <h2 className="text-4xl font-extrabold text-black leading-tight">
        Barbershop in <br />
        <span className="text-5xl text-black">Manhattan<br />NEW YORK</span>
      </h2>

      <div className="space-y-2 text-left text-gray-700">
        <p>📍 254 W 27ST ST, NEW YORK, NY 10011</p>
        <p>📞 (212) 123-4567</p>
        <p>📍 341 W 11ST ST, NEW YORK, NY 10022</p>
        <p>📞 (212) 123-4567</p>
      </div>

      <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
        Book Online
      </button>
    </div>

    {/* Imagen a la derecha */}
    <div className="md:w-1/2">
      <img
        src="https://www.jesusdos.com/peluqueria-y-amor-propio-como-un-buen-corte-de-pelo-puede-mejorar-su-autoestima_img212954t1.jpg"
        alt="Barber welcome"
        className="rounded-2xl shadow-lg w-full h-auto object-cover"
      />
    </div>
  </div>
</section>

</section>

      </section>
      {/* Why Choose Us */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Texto y ventajas */}
      <div>
        <h2 className="text-3xl font-extrabold text-black mb-6">Why Choose Us</h2>
        <p className="text-gray-700 mb-6">
          At Manhattan Barbershop, we blend tradition and trend to deliver world-class grooming.
          Our experienced barbers, relaxing environment, and commitment to excellence make every visit exceptional.
        </p>
        <ul className="space-y-4 text-gray-800">
          {[
            "Experienced and friendly barbers",
            "Premium grooming products",
            "Clean and modern environment",
            "Flexible online booking",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCheckCircle className="text-[#b3ac84]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Horarios y botón */}
      <div className="bg-[#2c2b2b] text-white rounded-xl p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Business Hours</h3>
        <ul className="space-y-2 mb-6 text-white/80">
          <li className="flex justify-between">
            <span>Monday - Friday</span>
            <span>9:00 AM – 7:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday</span>
            <span>10:00 AM – 6:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span>Closed</span>
          </li>
        </ul>
        <button className="w-full bg-[#b3ac84] hover:bg-[#9e976c] text-black font-semibold py-2 rounded transition">
          BOOK NOW
        </button>
      </div>
    </div>
      <section className="bg-[#b3ac84] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-black">Our Pricing</h2>

          <div className="grid text-xl font-light grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {leftColumn.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b border-black/10 pb-2 text-black"
                >
                  <span>{item.service}</span>
                  <span className="text-white/50">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {rightColumn.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b border-black/10 pb-2 text-black"
                >
                  <span>{item.service}</span>
                  <span className="text-white/50">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
        </>
    );
};
export default Home;
