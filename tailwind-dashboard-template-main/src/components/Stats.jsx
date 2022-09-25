// import { stats } from "../constants";
import styles from "../style";
import CountUp, { useCountUp } from "react-countup";

export const stats = [
  {
    id: "stats-1",
    title: "Users Daily",
    value: <CountUp end={380} enableScrollSpy duration={5} />,
  },
  {
    id: "stats-2",
    title: "CEO's Trust Us",
    value: <CountUp end={230} enableScrollSpy duration={5} />,
  },
  {
    id: "stats-3",
    title: "Transactions daily",
    value: <CountUp end={40000} duration={8} enableScrollSpy
     />,
  },
];

// const Stats = () => (
//   <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    
//       <div  className={`flex-1 flex justify-start items-center flex-row m-3`} >
//         <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
//         
//         <CountUp end={100} enableScrollSpy />
//         <CountUp end={100} enableScrollSpy />
//         <CountUp end={100} enableScrollSpy /> 
//         </h4>
//         <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          
//         </p>
//       </div>
    
     
    
//   </section>
// );



const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-20 overflow-hidden`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
    
  </section>
);

export default Stats;
