import React from 'react';
import extraImg from '../../../images/Banner/extra.jpg';

const Information = () => {
  return (
    <div className='container mx-0 md:min-h-screen h-auto py-8'>
      <div className="w-full flex justify-around items-center">
       <div className='w-1/2'>
       <img className='w-3/4 mx-auto' src={extraImg} alt="" />
       </div>

       <div className='w-1/2'>
       <div className="accordion" id="accordionExample">

  <div className="accordion-item bg-white border border-gray-200 mb-6 py-8">

    <h2 className="accordion-header mb-0" id="headingOne">
      <button
        className="
  accordion-button
  relative
  flex
  items-center
  w-full
  py-4
  px-5
 text-gray-800 text-left
  bg-white
  border-0
  rounded-none
  transition
  focus:outline-none
  text-5xl
"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        PROCCESS
      </button>
    </h2>

    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body py-4 px-5">
        <p>
        The oil dissolves in the alcohol and rises. Heat is used to evaporate the alcohol, which once fully burned off, leaves a higher concentration of the perfume oil on the bottom. Oils are extracted from plant substances by steam disfillation, solvent extraction, enfleurage, maceration, or expression.
        </p>
      </div>
    </div>
  </div>

  <div className="accordion-item bg-white border border-gray-200 mb-6 py-8">
    <h2 className="accordion-header mb-0" id="headingTwo">
      <button
        className="
  accordion-button
  collapsed
  relative
  flex
  items-center
  w-full
  py-4
  px-5
 text-gray-800 text-left
  bg-white
  border-0
  rounded-none
  transition
  focus:outline-none
  text-5xl uppercase
"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Our Stores
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body py-4 px-5">
       <p>
         we have a few store of perfumes . every clients satisfied by our service .. we have many items and always have our stocks 
       </p>
      </div>
    </div>
  </div>

  <div className="accordion-item bg-white border border-gray-200 mb-6 py-8">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button
        className="
  accordion-button
  collapsed
  relative
  flex
  items-center
  w-full
  py-4
  px-5
  text-5xl text-gray-800 text-left
  bg-white
  border-0
  rounded-none
  transition
  focus:outline-none
"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
       QUALITY MATERIAL
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body py-4 px-5">
       <p>
       Most full perfumes are made of about 10-20% perfume oils dissolved in alcohol and a trace of water. Colognes contain approximately 3-5% oil diluted in 80-90% alcohol, with water making up about 10%. Toilet water has the least amount—2% oil in 60-80% alcohol and 20% water.
       </p>
      </div>
    </div>
  </div>

</div>

       </div>
      </div>
      
      
    </div>
  );
};

export default Information;