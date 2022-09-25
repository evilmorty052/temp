import Mymodal from "../modal";


const   Pricing3 = () => {
    return (
      <div className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-2xl text-indigo-600 font-semibold">Exclusive Packages</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-indigo-600 sm:text-4xl">
              Packages Optimized For Maximum ROI
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
  
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div><div class="flex justify-center col-span-full sm:col-span-6 xl:col-span-4  h-max relative text-center">
                <div class="rounded-lg shadow-lg bg-glass2 max-w-sm bg-glass2">
                  <a href="#!">
                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                  </a>
                  <div class="p-6">
                    <h5 class="text-gradient text-xl font-poppins font-extrabold mb-2">GOLD CLASS</h5>
                    <p class="text-green-300 text-base mb-4 font-extrabold font-poppins">
                      ROI: 20%
                    </p>
                    <div className='flex  justify-between'>
                    <div className='bg-red-400 rounded-full'><Mymodal/></div>
                    <div>
                    <a class="buy-with-crypto"
                        href="https://commerce.coinbase.com/checkout/b9e23fa5-8270-489b-97b1-ce43669c4129" target='blank'>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
                    </a>
                    <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
                    </script>

                    </div>
                    </div>
                  </div>
                </div>
              </div>
         </div>
            <div><div class="flex justify-center col-span-full sm:col-span-6 xl:col-span-4  h-max relative text-center">
                <div class="rounded-lg shadow-lg bg-glass2 max-w-sm bg-glass2">
                  <a href="#!">
                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                  </a>
                  <div class="p-6">
                    <h5 class="text-gradient text-xl font-poppins font-extrabold mb-2">PLATINUM CLASS</h5>
                    <p class="text-green-300 text-base mb-4 font-extrabold font-poppins">
                      ROI: 20%
                    </p>
                    <div className='flex  justify-between'>
                    <div className='bg-red-400 rounded-full'><Mymodal/></div>
                    <div>
                    <a class="buy-with-crypto"
                        href="https://commerce.coinbase.com/checkout/b9e23fa5-8270-489b-97b1-ce43669c4129" target='blank'>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
                    </a>
                    <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
                    </script>

                    </div>
                    </div>
                  </div>
                </div>
              </div>
         </div>
            </dl>
          </div>
        </div>
      </div>
    )
  }
  
  export default Pricing3