import styles from "../../../style";
import Lhero from "./lhero";
import Disclosure2 from "../../../components/disclosure/disclosure2";
import Disclosure3 from "../../../components/disclosure/disclosure3";

import { Navbar } from "../../../components";

const Learn = () => (
  <div className="bg-slate-400 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
    </div>

    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Hero />
        <Stats /> */}
        <Lhero/>
        
      </div>
    </div>
    
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
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
         <div className="inline-flex flex-col items-start justify-start gap-[23px]">
      <div
        style={{
          background:
            'url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/10075/5250b53ddb2cf3b190d563eec4b74917f91f9400.webp) center / cover',
        }}
        className="h-[203px] w-[266px]"
      />
      <p className="h-[41px] w-[266px] font-['Inter'] text-[40px] leading-[normal] text-black">
        hello
      </p>
      <p className="h-[39px] w-[341px] font-['Inter'] text-[40px] leading-[normal] text-black">
        hello
      </p>
    </div>
        <div>
            <h1 className={`${styles.heading2} text-center`}>
            WHAT IS CBD?
            </h1>
            
            <Disclosure2/>
        </div>
        
        
        
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <div>
              <h1 className={`${styles.heading2} text-center`}>HOW DOES CBD OIL WORK?</h1>
            <p className={`${styles.paragraph} text-center`}>
                  The human body has a vast network of receptors, called the Endocannabinoid System. The purpose of this system is to help our body stay balanced and in good overall health, even when external factors and certain lifestyle choices diminish our wellbeing. CBD and other cannabinoids fit into the receptors of the Endocannabinoid System, helping the body complete its efforts to keep us in good health by supporting many of the body’s physical processes. Learn more about the Endocannabinoids System.
            </p>
            <Disclosure3/>
         </div>
         <div>
              <h1 className={`${styles.heading2} text-center`}>WHAT CBD PRODUCT IS BEST FOR ME?</h1>
            <p className={`${styles.paragraph} text-center`}>
            Your body has needs. So does your lifestyle. Whether you prefer oils, capsules,<br className="hidden md:flex"/> or a topical option like our skin balm and cream, do what works for you.
            </p>
            <Disclosure3/>
         </div>
        
       
      </div>
     
    </div>
    
  </div>
);

export default Learn;
