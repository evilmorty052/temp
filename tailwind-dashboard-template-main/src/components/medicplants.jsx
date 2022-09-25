import React from 'react'
import CBD from '../assets/homecbd.png'
import GetStarted from './GetStarted'
import Button from './Button'

const medicplants = () => {
  return (
    // <div className='my-8'>
    //     <h3 className='header text-3xl text-center mt-10 font-poppins font-extrabold text-indigo-400 mb-5'>The Medic 420 Plants</h3>
    //     <p className='text-center text-white font-semibold text-2xl'>The cannabis plantations and facilities are located in Switzerland (Fraubrunnen and Solothurn). All plantations of the Medic420 group  are licensed according to GMP guidelines. These cannabis plantations include top tier indoor cannabis plants which get harvested every 2-3 months. After harvesting, the cannabis plants are continuously cloned (without extra costs!) by using its cuttings / mother plants.</p>
    // </div>
    <aside
  class="overflow-hidden  bg-center bg-no-repeat bg-cover mb-10" style={{
    backgroundImage: `url(${CBD})`,
    backgroundSize: "contain",
  }}
>
  <div class="p-8 md:p-12 lg:px-16 lg:py-24 bg-transparent ">
    <div class="max-w-lg text-center sm:text-left">
      <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
      100% Managed <span className='text-green-400'>Farming</span> for <span className='text-gradient'>Everyone</span>
      </h2>

      <p
        class="hidden max-w-md text-white/90 md:mt-6 md:text-lg md:leading-relaxed md:block"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        officia corporis quasi doloribus iure architecto quae voluptatum beatae
        excepturi dolores.
      </p>

      <div class="mt-4 sm:mt-8">
        <Button/>
        
      </div>
    </div>
  </div>
</aside>

  )
}

export default medicplants