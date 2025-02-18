import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ReviewScoreBar = ({ review = {} }) => {
  const [countStart, setCountStart] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Executa uma vez ao entrar na vista
    threshold: 0.1, // Garante que o elemento está pelo menos 10% visível
  });

  const { percent, title } = review;

  React.useEffect(() => {
    if (inView) {
      setCountStart(true);
    }
  }, [inView]);

  return (
    <div className="tour-details__review-score__bar" ref={ref}>
      <div className="tour-details__review-score__bar-top">
        <h3>{title}</h3>
        <p>{countStart ? percent : 0}%</p>
      </div>
      <div className="tour-details__review-score__bar-line">
        <span
          className="animated slideInLeft"
          style={{ width: `${countStart ? percent : 0}%` }}
        ></span>
      </div>
    </div>
  );
};

export default ReviewScoreBar;
