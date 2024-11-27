import { useState } from "react";

import arrowIcon from "@/assets/arrow.svg";

import styles from "./question.module.css";

type Properties = {
  title: string;
  body: string;
};

const Question: React.FC<Properties> = ({ title, body }) => {
  const [isBodyOpen, setIsBodyOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const toggleBodyOpen = () => {
    if (!isBodyOpen) {
      setIsRendered(true);
    }
    setIsBodyOpen(!isBodyOpen);
  };

  const handleAnimationEnd = () => {
    if (!isBodyOpen) {
      setIsRendered(false);
    }
  };

  return (
    <div className={styles.question}>
      <div className={styles.header} onClick={toggleBodyOpen}>
        <div>{title}</div>
        <img
          src={arrowIcon}
          alt="arrow"
          className={`${styles.arrow} ${isBodyOpen ? "" : styles.down}`}
        />
      </div>
      {isRendered && (
        <div
          className={`${styles.body} ${isBodyOpen ? styles.open : styles.closed}`}
          onAnimationEnd={handleAnimationEnd}
        >
          {body}
        </div>
      )}
    </div>
  );
};

export { Question };
