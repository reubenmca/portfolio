import React from "react";
export function Gallery() {
  const images = [
    { src: "/IMG_0080-min.webp", alt: "This is me!" },
    { src: "/IMG_0623-min.webp", alt: "That's me too!" },
    { src: "/IMG_9673-min.webp", alt: "You guessed it... Me!" },

  ];
    return (
    <div className="px-24 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 bg-bg-dark py-20">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-md bg-gradient-to-br from-gray-100 to-gray-200 hover:shadow-xl transition-all duration-300 group"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            width="600"
            className="object-cover w-full h-56 transform group-hover:scale-105 transition-transform duration-500"
          />

          {/* Hover overlay */}
          <div className="
            absolute inset-0 bg-black/40 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 
            flex items-center justify-center
          ">
            <p className="text-white text-sm font-medium px-3 text-center">
              {image.alt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
