import React from 'react';
import Banner1 from '../../../images/Banner/p-1.webp';
import Banner2 from '../../../images/Banner/p-2.webp';
import Banner3 from '../../../images/Banner/p-3.webp';
import Banner4 from '../../../images/Banner/p-4.webp';
import Banner5 from '../../../images/Banner/p-5.webp';
import Banner6 from '../../../images/Banner/p-6.webp';


const Banner = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide relative " data-bs-ride="carousel">
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item  relative float-left w-full">
          <div className='w-full mx-4 md:mx-12 flex justify-around items-center'>
            <div className='w-1/2 mr-auto '>
              <h1 className='md:text-6xl text-3xl font-bold  uppercase my-4 text-sky-300 '>Iss Spray</h1>
              <p className='text-justify md:block hidden max-w-lg my-4'>
                Iss Spray is an aquatic floral scent with transparent notes of lotus, freesia and cyclamen and juicy melon. The middle note of peony, lily and carnation reveals the perfume's character. The end note is a refined woody scent with the notes of cedar, sandal, musk and amber.</p>
              <button className='py-3 px-8 outline-none border font-medium text-xl text-black rounded bg-gradient-to-t from-sky-200 to-gray-400 
                  hover:scale-90 transition-all'>See More</button>
            </div>
            <div className='w-1/2'>
              <img
                src={Banner1}
                className="block w-3/4"
                alt="Wild Landscape"
              />
            </div>

          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div className='w-full mx-4 md:mx-12 flex justify-around items-center'>
            <div className='w-1/2 mr-auto '>
              <h1 className='md:text-6xl text-3xl font-bold text-orange-300 uppercase my-4'>Dylan Blue</h1>
              <p className='text-justify md:block hidden max-w-lg my-4'>Fragrance Description: New and exquisite qualities of natural citrus, aquatic notes, and violet leaves combine with modern hints of fig leaf to give an incisive, Mediterranean freshness. About the Bottle: The classic bottle features bright blue and gold that guards the precious new fragrance for him.</p>
              <button className='py-3 px-8 outline-none border font-medium text-xl text-white rounded bg-gradient-to-t from-violet-500 to-blue-600 
                  hover:scale-90 transition-all'>See More</button>
            </div>
            <div className='w-1/2'>
              <img
                src={Banner2}
                className="block w-3/4"
                alt="Wild Landscape"
              />
            </div>

          </div>
        </div>
        <div className="carousel-item active relative float-left w-full">
          <div className='w-full mx-4 md:mx-12 flex justify-around items-center'>
            <div className='w-1/2 mr-auto '>
              <h1 className='md:text-6xl text-3xl font-bold text-pink-300 uppercase my-4'>
              Beyonce Ea
              </h1>
              <p className='text-justify md:block hidden max-w-lg my-4'>What does Beyonce Heat smell like?
Heat is a warm fruity musk; it opens on lots of peach-flavored hard candy over midding-dark, nondescript florals, and is a little loud for a few minutes3 (the notes: red vanilla orchid, magnolia, neroli, blush peach, honeysuckle nectar, almond macaroon, crème de musk, sequoia milkwood, tonka bean and amber).</p>
              <button className='py-3 px-8 outline-none border font-medium text-xl text-white rounded bg-gradient-to-t from-violet-500 to-pink-400 
                  hover:scale-90 transition-all'>See More</button>
            </div>
            <div className='w-1/2'>
              <img
                src={Banner3}
                className="block w-3/4"
                alt="Wild Landscape"
              />
            </div>

          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 text-black"

        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;

