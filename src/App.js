import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid';
import React, {useState} from "react";
import { Bar } from 'react-chartjs-2';

import 'bootstrap/dist/css/bootstrap.min.css'; /* delete later */
import Button from 'react-bootstrap/Button'; /* delete later */

function App() {
  const [question, setQuestion] = useState('')
  const [newQuestion, setNewQuestion] = useState('')
  const [answers, setAnswers] = useState([])
  const [votes, setVotes] = useState({})
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const handleNewQuestion = (e) => {
    setNewQuestion(e.target.value)
  }
  const handleUpdateQuestion = () => {
    setQuestion(newQuestion)
    setNewQuestion('')
  }
  const handleAddAnswer = () => {
    setAnswers(answers.concat([{
      id: uuid(),
      text: ''
    }]))
  }
  const handleChangeAnswer = (id, e) => {
    const newAnswers = answers.map((answer) => {
      if (answer.id === id) answer.text = e.target.value;
      return answer
    })
    setAnswers(newAnswers)
  }
  const handleRemoveAnswer = (id) => {
    setAnswers(answers.filter(answer => id !== answer.id))
    const newVotes = Object.assign({}, votes)
    delete newVotes[id];
    setVotes(newVotes);
  }
  const handleVotes = () => {
    const newVotes = Object.assign({}, votes)
    newVotes[selectedAnswer] = newVotes[selectedAnswer] || 0;
    newVotes[selectedAnswer]++;
    setVotes(newVotes);
    setSelectedAnswer('')       
  }

  const data = {
    labels: answers.map(answer => answer.text),
    datasets: [
      {
        label: '# of Votes',
        data: answers.map((answer) => {return votes[answer.id]}),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 30
          }
        },
      ],
    },
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h2>Quesion</h2> 
      {question}
      <br />
      <input 
        placeholder="Poll Question"
        name="pollQuestion" 
        value={newQuestion}
        onChange={handleNewQuestion}
      />
      <button onClick={handleUpdateQuestion}>Update</button>

      <hr/>

      <h2>Answers</h2>
      {answers.map((answer) => {
        return (
          <div key={answer.id}>
            <input
              value={answer.text}
              onChange={(e) => {
                handleChangeAnswer(answer.id, e)
              }}
            />
            <button onClick={() => handleRemoveAnswer(answer.id)}>Remove</button>
            <br/>
          </div>
        )
      })}
      <br/>
      <button onClick={handleAddAnswer}>Add Answer</button>

      <hr/>

      <h2>Votes</h2>
      {answers.map((answer) => {
        return (
          <div key={answer.id}>
            <input
              type="radio"
              checked={selectedAnswer === answer.id}
              onChange={() => setSelectedAnswer(answer.id)}
            />
            <span>{answer.text}</span>
            <br />
          </div>
        )
      })}
      <button onClick={handleVotes}>Vote</button>
      <hr/>

      <h2>Result</h2>
      {answers.map((answer) => {
        return (
          <div key={answer.id}>
            {answer.text}: {votes[answer.id] || 0}
            <br />
          </div>
        )
      })}
      <Bar data={data} options={options} />
    </div>
  );
}

export default App;
