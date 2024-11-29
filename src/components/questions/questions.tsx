import { Question } from "@/components/question/question";

import styles from "./questions.module.css";
import { questions } from "./question-items";

const Questions: React.FC = () => {
  return (
    <div className={styles.questions}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.questionsContainer}>
        {questions.map(question => (
          <Question question={question} key={question.title} />
        ))}
      </div>
    </div>
  );
};

export { Questions };
