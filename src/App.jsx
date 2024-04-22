import { useState } from "react";
import data from "./data";
import Question from "./question";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [expandedQ, setExpandedQ] = useState(null);
  const handleClick = (question) => {
    if (expandedQ === question) {
      setExpandedQ(null);
    } else {
      setExpandedQ(question);
    }
  };
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              question={question}
              handleClick={handleClick}
              expandedQ={expandedQ}
            ></Question>
          );
        })}
      </section>
    </main>
  );
};
export default App;
