import React from 'react'
import { Navbar } from '../../components'
import styles from '../../style'
import Hero1 from './heroes/hero1'
import Feature1 from './features/feature1'
import Feature2 from './features/feature2'
import Feature3 from './features/feature3'
import {CTA} from '../../components'
import Pricing from './pricing/pricing'
import {Footer} from '../../components'
import CTA1 from './cta/cta1'
import Hero2 from '../../components/hero2'
import Feature4 from './features/feature4'
import Feature5 from './features/feature5'
import Feature6 from './features/feature6'
import Example from '../../components/disclosure/disclosure'

const Smart = () => {
  return (
    <>
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero2 />
        
        {/* <Stats /> */}
      </div>
    </div>
    
    <div className={`bg-slate-400 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Feature4 />
        <CTA1 />
        <div className='hidden md:flex'><Feature5 /></div>
        <div className='ss:hidden'></div>
        <Feature6/>
        <Pricing/>
        {/* <Example/> */}
        
        
        {/* <Section/>
        
        <Business />
        <CardDeal />
        <Billing />
        <Medicplants />
        <Testimonials />
        <Clients />
        <CTA />
        <Example/>
        <Footer /> */}
        
        
        
        
      </div>
    </div>
    
    <Footer />
  </div>
    </>
  )
}

export default Smart