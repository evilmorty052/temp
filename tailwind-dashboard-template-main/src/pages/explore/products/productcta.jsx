import styles from "../../../style";
import Button from "../../../components/Button";




const ProductsCTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Get a free Gift Bag with <span className="text-gradient">Every Purchase</span></h2>
        {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to Grow(wink) your investment.
        </p> */}
      </div>
  
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
  
  export default ProductsCTA;