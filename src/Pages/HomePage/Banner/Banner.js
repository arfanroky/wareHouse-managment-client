import React from 'react';
import Banner1 from '../../../images/Banner/p-1.webp';
import Banner2 from '../../../images/Banner/p-2.webp';
import Banner3 from '../../../images/Banner/p-3.webp';
import Banner4 from '../../../images/Banner/p-4.webp';
import Banner5 from '../../../images/Banner/p-5.webp';
import Banner6 from '../../../images/Banner/p-6.webp';


const Banner = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide relative bg-gray-200" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <div className='w-full mx-4 md:mx-12 flex justify-around items-center'>
            <div className='w-1/2 mr-auto '>
                  <h1 className='md:text-6xl text-3xl font-bold text-black uppercase my-4'>Dylan Blue</h1>
                  <p className='text-justify md:block hidden max-w-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis repellendus illo debitis voluptatem non laudantium at quibusdam. Reiciendis, assumenda doloribus dolore tempore aliquid sed ex asperiores voluptatem fuga vitae.</p>
                  <button className='py-3 px-5 outline-none border border-cyan-600 bg-cyan-600 font-medium text-xl text-white'>See More</button>
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
                  <h1 className='md:text-6xl text-3xl font-bold text-black uppercase my-4'>Dylan Blue</h1>
                  <p className='text-justify md:block hidden max-w-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis repellendus illo debitis voluptatem non laudantium at quibusdam. Reiciendis, assumenda doloribus dolore tempore aliquid sed ex asperiores voluptatem fuga vitae.</p>
                  <button className='py-3 px-5 outline-none border border-cyan-600 bg-cyan-600 font-medium text-xl text-white'>See More</button>
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
          <div className="carousel-item relative float-left w-full">
          <div className='w-full mx-4 md:mx-12 flex justify-around items-center'>
            <div className='w-1/2 mr-auto '>
                  <h1 className='md:text-6xl text-3xl font-bold text-black uppercase my-4'>Dylan Blue</h1>
                  <p className='text-justify md:block hidden max-w-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis repellendus illo debitis voluptatem non laudantium at quibusdam. Reiciendis, assumenda doloribus dolore tempore aliquid sed ex asperiores voluptatem fuga vitae.</p>
                  <button className='py-3 px-5 outline-none border border-cyan-600 bg-cyan-600 font-medium text-xl text-white'>See More</button>
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

