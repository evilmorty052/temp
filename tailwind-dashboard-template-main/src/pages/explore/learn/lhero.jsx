import React from 'react'

const Lhero = () => {
  return (
    <>
    <div className='max-w-screen-lg mx-auto'>
    <section>
  <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
      >
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="https://www.hyperui.dev/photos/man-1.jpeg"
          alt="Man using a computer"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">CBD 101</h2>

        <p class="mt-4 text-gray-600">
        CBD, or cannabidiol, is a compound found primarily in the flowers and leaves of the hemp plant. It’s one of many powerful cannabinoids found in hemp, and is known for supporting body and mind in various ways.*
        </p>
      </div>
    </div>
  </div>
</section>

   
    </div>
    </>

  )
}

export default Lhero