import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import Hero2 from "../components/hero2";
import Biz from "../components/Business2";
import CardDeal2 from "../components/CardDeal2";
import Section from "../components/section2";

const Aboutus = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero2 />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats />  */}
        {/* <Business /> */}
        <CardDeal2 />
        <Biz/>
        <Section/>
        {/* <Billing /> */}
        {/* <Testimonials />
        <Clients /> */}
        <CTA /> 
        <Footer />
      </div>
    </div>
  </div>
);

export default Aboutus;
