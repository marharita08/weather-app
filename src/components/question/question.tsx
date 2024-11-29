import { useState } from "react";

import arrowIcon from "@/assets/arrow.svg";
import { type Question } from "@/types/question.type";

import styles from "./question.module.css";

type Properties = {
  question: Question;
};

const Question: React.FC<Properties> = ({ question }) => {
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

  const renderList = (body: string) => {
    return body.split("\n").map((line, index) => {
      if (line.startsWith("•")) {
        return <li key={index}>{line.slice(1).trim()}</li>;
      }
    });
  };

  return (
    <div className={styles.question}>
      <div className={styles.header} onClick={toggleBodyOpen}>
        <div>{question.title}</div>
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
          {question.body.includes("•") ? (
            <>
              {question.body.split("\n")[0] && question.body.split("\n")[0]}
              <ul>{renderList(question.body)}</ul>
            </>
          ) : (
            question.body
          )}
        </div>
      )}
    </div>
  );
};

export { Question };
