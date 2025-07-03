import classNames from "classnames";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    name: "Hair Cuts",
    image:
      "https://plus.unsplash.com/premium_photo-1664304269687-f655ad796707?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
  },
  {
    name: "Beard",
    image:
      "https://st2.depositphotos.com/2931363/9695/i/450/depositphotos_96952024-stock-photo-young-handsome-man-in-barbershop.jpg",
  },
  {
    name: "Shaving",
    image:
      "https://nationalbarbers.b-cdn.net/wp-content/uploads/2019/12/new-year-2-768x390.png",
  },
  {
    name: "Razor Blade",
    image:
      "https://www.shutterstock.com/image-photo/hairdresser-applying-shaving-foam-on-600nw-2349861861.jpg",
  },
];

const images = [
  "https://storage.googleapis.com/hairdressr-prod-regions/england/birmingham/barber-shops/image.jpg",
  "https://images.fresha.com/lead-images/placeholders/barbershop-101.jpg?class=venue-gallery-mobile",
  "https://www.blac.media/wp-content/uploads/2022/11/pexels-rodnae-productions-7697394-scaled.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLX52HK6axcOO-wABBPBoMasUupvdT1I02KcoXfiQL1FFroyn57AZkVJr_i5dra6v7Ws&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvHEHVJx6HQS5LM44q3qwlYh7oAJ5e5uSmK1IJdDrXZmbGBrpqvjAzYDHolMiniEnsZk&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQopaokWpSbQwKFRa6qxCizLRlH0Zwzx48XsaYQwrCg89F8SLHauhnB0eqwGY5r7K_U0M&usqp=CAU",
  "https://plugins-media.makeupar.com/smb/blog/post/2023-10-13/c886032a-b79c-4a87-adb7-457afa1beec3.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiyzB9VDhHetPqc8WICeNlej-J7fZEeqXkMRDIXo75AiEo-JSOsZoa4hQv3cEQFtrDs0&usqp=CAU",
  "https://www.jesusdos.com/peluqueria-y-amor-propio-como-un-buen-corte-de-pelo-puede-mejorar-su-autoestima_img212954t1.jpg",
];

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

const Gallery = () => {
  return (
    <>
      <Navbar />
      <section
        className="relative bg-cover bg-center py-50"
        style={{
          backgroundImage:
            "url('https://images.newrepublic.com/9bba0e56c589fb3e06191969202abb446327a86a.jpeg')",
        }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-extrabold mb-12">Our Services</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 text-center">
                  <span className="bg-black/80 text-white px-3 py-1 rounded-md text-sm font-medium">
                    {service.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#b3ac84]">
        <div className="bg-[#2c2b2b] py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Experience the Best Haircut <br /> & Shave Services
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className={classNames(
                "overflow-hidden rounded-lg shadow-lg",
                "hover:scale-105 transform transition duration-300"
              )}
            >
              <img
                src={`${src}?auto=format&fit=crop&w=800&q=80`}
                alt={`Barber service ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
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

export default Gallery;
