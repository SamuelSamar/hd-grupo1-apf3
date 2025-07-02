import React from "react";
import classNames from "classnames";

import barberImg from "../assets/barber.png";

import cutIcon from "../assets/cut.png";
import shaveIcon from "../assets/shaving.png";
import beardIcon from "../assets/beard.png";
import kidsIcon from "../assets/kids.png";

import celia from "../assets/celia.png";
import frank from "../assets/frank.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Comments() {
  const services = [
    { icon: cutIcon, label: "Hair Cut" },
    { icon: shaveIcon, label: "Shaving" },
    { icon: beardIcon, label: "Beard Trim" },
    { icon: kidsIcon, label: "Kids Haircut" },
  ];

  const gallery = [
    "https://storage.googleapis.com/hairdressr-prod-regions/england/birmingham/barber-shops/image.jpg",
    "https://images.fresha.com/lead-images/placeholders/barbershop-101.jpg?class=venue-gallery-mobile",
    "https://www.blac.media/wp-content/uploads/2022/11/pexels-rodnae-productions-7697394-scaled.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLX52HK6axcOO-wABBPBoMasUupvdT1I02KcoXfiQL1FFroyn57AZkVJr_i5dra6v7Ws&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvHEHVJx6HQS5LM44q3qwlYh7oAJ5e5uSmK1IJdDrXZmbGBrpqvjAzYDHolMiniEnsZk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQopaokWpSbQwKFRa6qxCizLRlH0Zwzx48XsaYQwrCg89F8SLHauhnB0eqwGY5r7K_U0M&usqp=CAU",
  ];

  const comments = [
    {
      name: "Celia Almedo",
      avatar: celia,
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut nulla pharetra diam sit amet nisl.",
    },
    {
      name: "Frank Kinney",
      avatar: frank,
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut nulla pharetra diam sit amet nisl.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="font-sans">
        {/* 1. Barbershop Services */}
        <section className="bg-gray-800 text-white pt-24 pb-12 px-4">
          <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
            Barbershop Services
          </h1>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-full md:w-1/2 h-85 overflow-hidden rounded-lg border-4 border-blue-400">
              <img
                src={barberImg}
                alt="Barber"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8 md:mt-0 md:w-1/2">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="bg-gray-700 flex flex-col items-center justify-center p-8 rounded-lg h-40"
                >
                  <img src={s.icon} alt={s.label} className="w-12 h-12" />
                  <p className="mt-3 text-lg">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Título de Galería */}
        <section className="bg-gray-800 text-white py-10 px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold">
            Experience the Best Haircut & Shave Services
          </h2>
        </section>

        {/* 3. Galería */}
        <section className="bg-[#b3ac84] py-8 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </section>

        {/* 4. People Comments */}
        <section className="bg-[#b3ac84] py-12 px-4">
          <h3 className="text-center text-4xl md:text-5xl font-bold text-white mb-8">
            People Comments
          </h3>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {comments.map((c, i) => (
              <div
                key={i}
                className={classNames(
                  "bg-white rounded-xl shadow-md p-6 flex flex-col",
                  "hover:shadow-lg transition-shadow duration-200"
                )}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                    {c.name}
                  </h4>
                </div>
                <p className="text-gray-700 flex-1">{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
