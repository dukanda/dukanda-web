"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const VisibilityCountUp = ({ count }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      {inView ? <CountUp start={0} end={count} duration={2} /> : 0}
    </div>
  );
};

export default VisibilityCountUp;
