import React from 'react'
import Cbd from '../../../assets/gum2.png'
import styles from '../../../style'
import { discount } from '../../../assets'
import GetStarted from '../../../components/GetStarted'
import Button from '../../../components/Button'
import { Navbar } from '../../../components'
import Productshero from './productshero'
import Product1 from './product1'
import Product2 from './product2'
import Product3 from './product3'
import Product4 from './product4'
import Product5 from './product5'
import {Footer} from '../../../components'
import ProductsCTA from './productcta'
import ProductDisclosure from './disclosure/productdisclosure'


const Products = () => {
  return (
    <>
    <div className=" w-full overflow-hidden bg-primary">

   <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
    </div>
    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Productshero/>
        
      </div>
    </div>
    <div className={` ${styles.paddingX} ${styles.flexCenter} bg-slate-400`}>
      <div className={`${styles.boxWidth}`}>
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
        <Product1/>
        <Product2/>
        <ProductsCTA/>
        <Product3/>
        <Product4/>
        <ProductsCTA/>
        <Product5/>
        
        
        
        
        
      </div>
     
    </div>

<ProductDisclosure/>
    <Footer/>
    </div>
   
    
 
    </>
 
  
  )
}

export default Products