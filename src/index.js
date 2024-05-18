import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const plusIcon = "/svgs/icon-plus.svg";
const minusIcon = "/svgs/icon-minus.svg";

const queAns = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members..",
  },
];

function MyApp() {
  return (
    <main className="container">
      <Header />
      <FaqList />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <img src="/svgs/icon-star.svg" alt="star icon" />
      <h1>FAQs</h1>
    </header>
  );
}

function FaqList() {
  return (
    <section>
      {queAns.map((que) => (
        <Question faqObject={que} key={que.question} />
      ))}
    </section>
  );
}

function Question({ faqObject: { question, answer } }) {
  const [currentIcon, setIcon] = useState(plusIcon);
  const [expanded, setExpanded] = useState(false);

  const toggleAnswer = () => {
    setIcon(currentIcon === plusIcon ? minusIcon : plusIcon);
    setExpanded(!expanded);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAnswer();
    }
  };

  return (
    <details open={expanded}>
      <summary
        role="button"
        aria-expanded={expanded}
        onClick={toggleAnswer}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <h2>{question}</h2>
        <img src={currentIcon} alt={expanded ? "minus icon" : "plus icon"} />
      </summary>
      <p>{answer}</p>
    </details>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);