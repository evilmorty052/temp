import styles from "../../style";
import { Navbar } from "../../components";
import Lhero from "./learn/Lhero";

const Explore = () => (
  <div className="bg-red-400 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Hero />
        <Stats /> */}
        <Lhero/>
        
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
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
        
        
        
        
      </div>
    </div>
  </div>
);

export default Explore;
