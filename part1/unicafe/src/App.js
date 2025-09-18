import { useState } from 'react';


const StaticLine = ({ text, content }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{content}</td>
    </tr>
  )
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <table>
      <tbody>
        <StaticLine text="Good" content={good}/ >
        <StaticLine text="Neutral" content={neutral}/ >
        <StaticLine text="Bad" content={bad}/>
        <StaticLine text="All" content={good + neutral + bad}/>
        <StaticLine text="Average" content={((good - bad) / (good + neutral + bad)).toFixed(1)}/>
        <StaticLine text="Positive" content={`${(good / (good + neutral + bad) * 100).toFixed(1)}%`}/>
      </tbody>
    </table>
  )
};

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>Give feedback</h1>
      <Button text="Good" onClick={handleGood} />
      <Button text="Neutral" onClick={handleNeutral} />
      <Button text="Bad" onClick={handleBad} />
      <h1>Statistics</h1>
      {good || neutral || bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given.</p>
      )}
    </>
  );
};

export default App;