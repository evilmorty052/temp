import React from 'react'
import styles from '../../../style'
import check from '../../../assets/iphone1.png'

const section1 = () => {
  return (
    <div>
        <section>
  <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
      >
        <img
          className="absolute inset-0 object-cover max-w h-full"
          src={check}
          alt="Man using a computer"
        />
      </div>

      <div className="lg:py-24">
        <h2 className={` ${styles.heading2} "text-3xl font-bold sm:text-4xl"`}>Medic 420 makes
future planning easy.
Here's how:</h2>

        {/* <p class="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p> */}
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default section1