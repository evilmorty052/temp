import { card } from "../assets";
import guide  from "../assets/mash2.png";
import styles, { layout } from "../style";
import Button from "./Button";
import Button2 from './Button2'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Who We Are <br className="sm:block hidden" /> 
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Medic420 is an American-based cannabis company Specialized in CBD Asset Management and provision of Wholesale Recreational and pharmaceutical cannabis products.  
      </p>

      {/* <Button styles={`mt-10`} /> */}
      <Button2 />

    </div>

    <div className={layout.sectionImg}>
      <img src={guide} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
