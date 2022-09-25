import React from 'react'

const Card = () => {
  return (
    <div class="flex justify-center  mx-10 my-6 min-w-xs">
    <div class="rounded-lg shadow-lg max-w-sm bg-white">
      <a href="#!">
        <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
      </a>
      <div class="p-6 text-center">
        <h5 class="text-white text-xl font-bold mb-2">Earnings</h5>
        <p class="text-white  mb-4 text-2xl">
          $2400
        </p>
      </div>
    </div>
  </div>
  )
}

export default Card