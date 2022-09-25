/* This example requires Tailwind CSS v2.0+ */
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import Example from './disclosure/disclosure'
import CBD from '../assets/homecbd.png'
import Button from './Button'

const features = [
  {
    name: 'Professional Cultivation',
    description:
      'In the production centres of Cannergrow, premium quality cannabis is produced with the assistance of high-quality and modern equipment. This includes optimal irrigation, aeration, fertilization, pest control and so on.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Cannabis Products',
    description:
      'In addition to the cannabis plants, own products are also developed and distributed. These include, for example: flowers, pre-rolls, gummies, oils, shower gels, body lotion, hand cream, foot cream, conditioner, cooling spray, foam cleaner and other cosmetics.',
    icon: ScaleIcon,
  },
  {
    name: 'In-House Laboratory',
    description:
      '          To ensure the highest quality at all times, the company has its own in-house laboratory. Among other things, experiments are carried out with various cannabis varieties (for example Futura, Swiss Dream, Geenie, Harlequin, G1 CBG) and hormones.',
    icon: BoltIcon,
  },
  {
    name: 'Medical Cannabis',
    description:
      'The demand of health-related cannabis is huge. Currently, the worldwide demand for pain patients is not being met. Cannergrow participates in this market and cooperates with pharmaceutical companies and governments.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

const   Section = () => {
  return (
    <div className=''>
<div className="py-12 bg-transparent mb-10 bounce-in-right" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-lg text-white font-semibold">Transactions</h2> */}
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-indigo-400 sm:text-4xl text-center ">
            A Better way to Invest in CBD
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
          </p>

        </div>

        <div className="mt-10 ">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 ">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-indigo-400">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">{feature.description}</dd>
                
              </div>
              
            ))}
          </dl>
        </div>
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
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

      <div class="lg:py-24 scale-in-center">
        <h2 class="text-3xl font-bold sm:text-4xl text-indigo-400 ">Grow your Investment</h2>

        <p class="mt-4 text-white text-lg">
        Once the Medic420 Registration is done you will be able to purchase cannabis plant plots. All cannabis plant plots have an individual QR code to assign the plants to the individual customer. From now on the employees of the company will take care of your cannabis plants. This includes optimal irrigation, aeration, fertilization and pest control. Furthermore, a security service is on site to ensure the protection of the indoor greenhouses
        </p>

       <div className='mt-8'> <Button/></div>
       
        
      </div>
    </div>
  </div>
        
      </div>
    </div>
    <section>
  
</section>



    </div>
    
    
  
    
  )
}

export default Section