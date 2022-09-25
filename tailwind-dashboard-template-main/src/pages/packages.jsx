import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import Section from "../components/section2";
import Example from "../components/disclosure/disclosure";
import Hero3 from "../components/hero3";


const Home = () => (
  // <div className="bg-black-gradient w-full overflow-hidden">
  //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  //       <div className={`${styles.boxWidth}`}>
  //         <Navbar />
  //       </div>
  //   </div>

  //   <div className={`bg-primary ${styles.flexStart}`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Hero3 />
  //     </div>
  //   </div>
    
  //   <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
  //     <div className={`${styles.boxWidth}`}>
        
        
  //       <CTA />
  //       <Example/>
  //       <Footer />
        
        
        
  //     </div>
  //   </div>
  // </div>

  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero3 />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Section/> */}
        {/* <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Example/>
        <Footer />  */}
        
        
        
      </div>
    </div>
  </div>
);

export default Home;
