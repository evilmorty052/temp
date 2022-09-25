import styles from "../../../style";
import Button from "../../../components/Button";
import CountUp, { useCountUp } from "react-countup";


const Count =()=>{
    return(
        <CountUp end={40000} duration={10} enableScrollSpy
     />
    )
}

const CTA1 = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow max-w-screen-lg mx-auto`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Over <span className="text-gradient"><span></span><Count/><br className="hidden md:flex"/> UNIQUE</span> Investors</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        Your Investment is SAFE with Us.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA1;