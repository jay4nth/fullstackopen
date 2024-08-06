import { useState } from "react";
import "./App.css";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good !== 0 || bad !== 0 || neutral !== 0) {
    const total = good + bad + neutral;
    const aver = (good + neutral * 0 - bad) / total;
    const per = (good / total) * 100;
    return (
      <table>
        <StatisticLine text="good" value={good}></StatisticLine>
        <StatisticLine text="neutral" value={neutral}></StatisticLine>
        <StatisticLine text="bad" value={bad}></StatisticLine>
        <StatisticLine text="all" value={total}></StatisticLine>
        <StatisticLine text="average" value={aver}></StatisticLine>
        <StatisticLine text="positive" value={per}></StatisticLine>
      </table>
    );
  } else {
    return <div>No Feedback Submitted</div>;
  }
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGood} text="good"></Button>
      <Button handleClick={handleNeutral} text="neutral"></Button>
      <Button handleClick={handleBad} text="bad"></Button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
}

export default App;
