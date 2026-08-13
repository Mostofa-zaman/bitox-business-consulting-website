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

const Testimonials = () => {
  return (
    <div>Testimonials</div>
  )
}

export default Testimonials