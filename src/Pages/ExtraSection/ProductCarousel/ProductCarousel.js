import React from 'react';
import img1 from '../../../images/Banner/p-1.webp';
import img2 from '../../../images/Banner/p-2.webp';
import img3 from '../../../images/Banner/p-3.webp';
import img4 from '../../../images/Banner/p-4.webp';
import img5 from '../../../images/Banner/p-5.webp';

const ProductCarousel = () => {
    return (
<section className="overflow-hidden text-gray-700 my-4">
    
  <div className="container py-2 mx-auto ">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">

        <div className="w-1/2 p-1 md:p-2 shadow-2xl border border-rose-400 bg-sky-200">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img1}/>
        </div>

        <div className="w-1/2 p-1 md:p-2 shadow-2xl bg-purple-300">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img3}/>
        </div>

        <div className="w-full p-1 md:p-2 shadow-2xl border border-rose-400 bg-sky-300">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img2}/>
        </div>
      </div>

      <div className="flex flex-wrap w-1/2 ">
        <div className="w-full p-1 md:p-2 shadow-2xl border border-rose-400 bg-slate-200">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img2}/>
        </div>
        <div className="w-1/2 p-1 md:p-2 shadow-2xl border border-rose-400 bg-pink-200">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img4}/>
        </div>
        <div className="w-1/2 p-1 md:p-2 border shadow-2xl bg-gray-300 border-rose-400">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img5}/>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default ProductCarousel;