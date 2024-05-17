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
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="/svgs/icon-star.svg" alt="star icon" />
      <h1>FAQs</h1>
    </div>
  );
}

function Main() {
  return (
    <>
      {queAns.map((que) => (
        <Question faqObject={que} key={que.question} />
      ))}
    </>
  );
}

function Question({ faqObject: { question, answer } }) {
  const [currentIcon, setIcon] = useState(plusIcon);

  const handleOnClick = () => {
    setIcon(currentIcon === plusIcon ? minusIcon : plusIcon);
  };

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOnClick();
    }
  };

  return (
    <div className="faq-box">
      <h4>{question}</h4>
      <img
        className="icon"
        src={currentIcon}
        alt="icon plus"
        onClick={handleOnClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      />
      <p className={`answer ${currentIcon === plusIcon ? "hidden" : ""}`}>
        {answer}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
