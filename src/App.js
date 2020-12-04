import './App.css';
import { v4 as uuid } from 'uuid';
import React, {useState} from "react";
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  const [question, setQuestion] = useState('')
  const [newQuestion, setNewQuestion] = useState('')
  const [answers, setAnswers] = useState([
    {id: uuid(), text: ''}, {id: uuid(), text: ''}
  ])
  const [votes, setVotes] = useState({})
  const [selectedAnswers, setSelectedAnswers] = useState([])

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
    selectedAnswers.forEach((item) => {
      newVotes[item] = newVotes[item] || 0;
      newVotes[item]++;
    })
    setVotes(newVotes);
    setSelectedAnswers([])       
  }

  const handleReset = () => {
    setNewQuestion('')
    setQuestion('')
    setAnswers([
      {id: uuid(), text: ''}, {id: uuid(), text: ''}
    ])
    setVotes({});
    setSelectedAnswers([])
  };
  const handleSelectedAnswers = (id, e) => {
    let newSelectedAnswers = selectedAnswers.concat()
    if (newSelectedAnswers.includes(id)) {
      newSelectedAnswers = newSelectedAnswers
        .filter(item => item !== id)
    } else {
      newSelectedAnswers.push(id)
    }
    setSelectedAnswers(newSelectedAnswers)
  }
  console.log(selectedAnswers)
  
  const totalVotes = () => {
    let total = 0;
    Object.keys(votes).forEach((key) => {
      total += votes[key]
    })
    return total
  }
  const maxVotes = () => {
    let max = 30;
    Object.keys(votes).forEach((key) => {
      if (votes[key] > max) max = votes[key]
    })
    return max + 10;
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
          'rgba(255, 102, 255, 0.2)',
          'rgba(119, 119, 119, 0.2)',
          'rgba(51, 0, 255, 0.2)',
          'rgba(204, 51, 255,0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 102, 255, 1)',
          'rgba(119, 119, 119, 1)',
          'rgba(51, 0, 255, 1)',
          'rgba(204, 51, 255,1)'
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
            max: maxVotes()
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            callback: function(value) {
              if (value.length > 20) {
                return value.substr(0, 20) + '...'; //truncate
              } else {
                return value
              }
            }
          }
        }
      ]
    }
  }

  return (
    <div className="App container-fluid">
      <header className="App-header">
        <h1>Sir Vote-a-lot - <small>enjoy!</small></h1>
      </header>
      <div className="row">
        <div className="col-sm-3">
          <div className="card d-flex flex-column h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Your question</h5>
              <div className="input-group mb-3">
                <input 
                  disabled={newQuestion.length >= 80}
                  placeholder="What's your poll question?"
                  name="pollQuestion"
                  value={newQuestion}
                  onChange={handleNewQuestion}
                  type="text"
                  className="form-control"
                  aria-label="Poll Question"
                  aria-describedby="pollQuestion"
                />
                <button className="btn btn-outline-secondary" type="button" id="pollQuestion" onClick={handleUpdateQuestion}>Update</button>
              </div>        
              <div>
                <h5 className="d-inline-block">Your answers</h5>
                {answers.length <= 2 &&
                  <p className="float-right text-warning d-inline-block">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-exclamation-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  </svg> you need at least 2</p>
                }
              </div>
              {answers.map((answer) => {
                return (
                  <div key={answer.id} className="input-group mb-3">
                    <input 
                      disabled={answer.text.length >= 80}
                      value={answer.text}
                      onChange={(e) => {
                        handleChangeAnswer(answer.id, e)
                      }}
                      text="text"
                      className="form-control"
                      placeholder="Your Answer Here"
                      aria-label="Answers"
                      aria-describedby={"answer" + answer.id}
                    />
                    <div className="input-group-append">
                      {answers.length > 2 &&
                        <button type="button" className="btn btn-outline-secondary" id={"answer" + answer.id} onClick={() => handleRemoveAnswer(answer.id)}>&times;</button>
                      }
                    </div>
                  </div>
                )
              })}
              <div className="text-right">
                {answers.length < 10 &&
                <button type="button" className="btn btn-primary" onClick={handleAddAnswer}>Add Answer
                </button>
                }
                <p className="small">{answers.length} /10 possible answers</p>
              </div>
              <button type="button" className="btn btn-secondary align-self-end" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card d-flex flex-column h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="card-title text-wrap">
                <h5>{question}</h5> 
                <p className="small">You can select multiple answers</p>
              </div>
              {answers.map((answer) => {
                return (
                  <div key={answer.id} className="form-check">
                    <input
                      disabled={answers.length < 2}
                      type="checkbox"
                      checked={selectedAnswers.includes(answer.id)}
                      onChange={(e) => handleSelectedAnswers(answer.id, e)}
                      className="form-check-input"
                      id={"vote" + answer.id}
                    />
                    <label className="form-check-label d-block text-wrap" htmlFor={"vote" + answer.id}>{answer.text}</label>
                  </div>
                )
              })}
              <button type="button" className="btn btn-primary align-self-end" onClick={handleVotes}>Vote</button>
              {/* <h2>Result</h2>         
              <br />
              {answers.map((answer) => {
                return (
                  <div key={answer.id}>
                    {answer.text}: {votes[answer.id] || 0}
                    <br />
                  </div>
                )
              })} */}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card d-flex flex-column h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{question}</h5>
                <Bar data={data} options={options} />
                <div className="mt-auto">Total votes: {totalVotes()}</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
