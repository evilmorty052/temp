import CountUp, { useCountUp } from "react-countup";

export default function Counter() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000
  });

  return (
    <div className="App">
      {/* <div className="content" /> */}
      <CountUp end={100} enableScrollSpy />
      <span id="counter" />
    </div>
  );
}