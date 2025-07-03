import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const barbers = [
    { name: "Mark Brown", title: "Senior Barber", image: "https://i.pinimg.com/736x/68/a2/b2/68a2b296cdf623ea80954a73c81cd1c3.jpg" },
    { name: "David Villegas", title: "Master Barber", image: "https://i.pinimg.com/736x/f3/4f/a2/f34fa26368b8e24559c76dadc12b706d.jpg" },
    { name: "Robert Field", title: "Stylist", image: "https://i.pinimg.com/736x/79/5f/8c/795f8cd574456d4fbe7475e32808d4de.jpg" },
    { name: "Clayton Lane", title: "Shave Expert", image: "https://i.pinimg.com/736x/4d/07/6e/4d076e0dd826ede7dd619d7fd004b67f.jpg" },
    { name: "Dan Spinello", title: "Hair Artist", image: "https://i.pinimg.com/736x/96/0a/11/960a113e59d05914c0de85b3f21a2bc2.jpg" },
    { name: "Dwight Lane", title: "Fade Specialist", image: "https://i.pinimg.com/736x/51/a0/87/51a0873688979bbbbcf9943bc59bb108.jpg" },
];

const Team = () => {
    return (
        <>
            <Navbar />
            <section className="bg-white py-5 px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-x-2">
                <div className="text-center md:text-left space-y-8">
                    <h2 className="text-4xl font-bold">ABOUT US</h2>
                    <h1 className="text-5xl md:text-6xl font-extrabold">
                        Licensed Professional <br /> Barbers
                    </h1>
                    <button className="bg-black text-white px-8 py-4 rounded-lg mt-4 hover:bg-gray-800 text-xl font-semibold transition">
                        BOOK AN APPOINTMENT
                    </button>
                </div>
                <div className="mt-10 md:mt-0 flex justify-center">
                    <img
                        src="https://i.pinimg.com/736x/7a/77/7e/7a777ef5dbcccc6623afcadb69670600.jpg"
                        alt="Bearded Barber"
                        className="max-w-xs md:max-w w-full h-150 object-cover rounded-xl shadow-lg"
                    />
                </div>
            </section>
            <section className="bg-[#b3ac84] py-16 px-6 text-center">
                <h2 className="text-5xl font-extrabold mb-10">Our Barbers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {barbers.map((barber, index) => (
                        <div key={index} className="bg-black p-4 rounded-xl shadow-md hover:shadow-xl transition">
                            <img src={barber.image} alt={barber.name} className="w-full h-90 object-cover rounded-lg mb-4" />
                            <h3 className="text-3xl text-white font-semibold">{barber.name}</h3>
                            <p className="text-2xl text-gray-500">{barber.title}</p>
                            <div className="flex justify-center space-x-4 mt-2">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                                    <FaFacebookF size={30} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-pink-400">
                                    <FaInstagram size={30} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-300">
                                    <FaTwitter size={30} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-black text-white py-16 text-center">
                <h2 className="text-4xl font-extrabold mb-4">
                    Full service barber shop & men's grooming studio
                </h2>
                <p className="text-2xl mb-6 max-w-4xl mx-auto">
                    Simple Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.
                </p>
                <div className="space-x-4">
                    <button className="bg-white text-xl text-black px-6 py-3 rounded-full">View Pricing</button>
                    <button className="bg-gray-800 text-xl px-6 py-3 rounded-full">Book Online</button>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Team;