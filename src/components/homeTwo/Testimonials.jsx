import React from 'react'
import { FaStar } from "react-icons/fa";


function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-base" />
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  if (item.type === "video") {
    return (
      <div className="bg-white rounded-md p-7 lg:py-11.5  lg:px-7.5 overflow-hidden shadow-sm border border-white flex flex-col">
        {/* Video Thumbnail */}
        <div className="relative w-full h-50 mb-5">
          <Image
            src={item.videoThumbnail}
            alt="Video thumbnail"
            fill
            className="object-cover"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <BsPlayCircleFill className="text-white text-5xl drop-shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-md overflow-hidden shrink-0">
            <Image
              src={item.authorImg}
              alt={item.authorName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-primary text-sm leading-tight">
              {item.authorName}
            </p>
            <p className="text-tarnary text-xs">{item.authorRole}</p>
          </div>
        </div>
      </div>
    );
  }
}

const Testimonials = () => {
  return (
    <div>Testimonials</div>
  )
}

export default Testimonials