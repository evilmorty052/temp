import React from 'react'
import Iphone from '../../../assets/iphone1.png'
import styles, { layout } from '../../../style'
import Pie from '../../../assets/pie.svg'
import Fees from '../../../assets/fees.svg'



const Feature6 = () => (
    <>
    <div className='mx-auto max-w-screen-md'>
  <section id="product" className={`${layout.sectionReverse} `}>
    {/* <div className={layout.sectionImgReverse}>
      <img src={Iphone} alt="phone" className="w-[70%] h-[100%] relative z-[5]" /> */}

      {/* gradient start */}
      {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
    {/* </div> */}

    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} px-4 text-center`}>
        Unlock Your Financial<span className='text-gradient'> Future</span> <br className="sm:block hidden" /> 
      </h2>
      {/* <span className="text-red-400">DISCRIMINATION</span> */}
      {/* <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white px-4`}>
      Instantly get a diversified portfolio when you sign up for Smart Portfolio with our Stash+ or Stash Growth subscriptions. Also bank without hidden fees†, plan for retirement with our IRAs4, and get customized advice every step of the way.
        
      </p> */}

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 text-center">
        <div className='flex flex-col md:flex md:flex-row gap-10'>
        <div className=''>
          <div className='flex flex-col md:flex-row mb-5 items-center'>
          <img className=' w-20'  src={Pie} alt="" /> 
          <h3 className="font-poppins font-semibold text-4xl text-white">Smart Advisors</h3> 
        </div>
          
          
          <p className={`${styles.paragraph} px-4 text-white `}>The MEDIC 420 Investment Team oversees the selection and allocation of your Smart Mix.</p>
        </div>
        <div>
          <div className='flex flex-col md:flex-row mb-5 items-center' >
          <img className=' w-20' src={Fees} alt="" />
          <h3 className="font-poppins font-semibold text-4xl text-white">Smart Transactions</h3>
          </div>
        
          <p className={`${styles.paragraph} px-4 text-white `}>Add or remove cash, and we’ll automatically move you closer to your ideal investment mix..</p>
       </div>
        </div>
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
    </div>
    </>
);

export default Feature6;