import React, { useState } from 'react';
import { Row, Col} from 'antd'; // Importing Radio from Ant Design
import './Question.css'


const QuestionBox = () => {
  const questionsData = [
    {
      id: 1,
      question: 'ความรู้เกี่ยวกับ IF ของคุณ',
      options: ['ไม่รู้อะไรเลย', 'พอรู้บ้าง', 'มีความรู้',],
      answer: '',
    },
    {
      id: 2,
      question: 'คุณทานอาหารเช้าช่วงเวลาไหน',
      options: ['ไม่รับประทานอาหารเช้า', 'ระหว่าง 6.00น. - 8.00น', 'ระหว่าง 8.00น. - 10.00น', 'ระหว่าง 10.00น. - 12.00น'],
      answer: '',
    },
    {
      id: 3,
      question: 'คุณทานอาหารกลางวันช่วงเวลาไหน',
      options: ['ไม่รับประทานอาหารกลางวัน', 'ระหว่าง 10.00น. - 12.00น', 'ระหว่าง 12.00น. - 14.00น', 'ระหว่าง 14.00น. - 16.00น'],
      answer: '',
    },
    {
      id: 4,
      question: 'คุณทานอาหารเย็นช่วงเวลาไหน',
      options: ['ไม่รับประทานอาหารเย็น', 'ระหว่าง 16.00น. - 18.00น', 'ระหว่าง 18.00น. - 20.00น', 'ระหว่าง 20.00น. - 22.00น'],
      answer: '',
    },
    {
      id: 5,
      question: 'คุณออกกำลังกายบ่อยแค่ไหน',
      options: ['ทุกวัน', '2-3 ครั้ง/สัปดาห์', 'มากกว่า 1 ครั้ง/เดือน', 'ไม่ออกกำลังกายเลย'],
      answer: '',
    },
    {
      id: 6,
      question: 'คุณเคยควบคุมน้ำหนักหรือไม่',
      options: ['เคย', 'ไม่เคย'],
      answer: '',
    },
    {
      id: 7,
      question: 'เป้าหมายการลดน้ำหนัก',
      options: ['ช้าแต่มั่นคง', 'ปานกลาง', 'เร็วที่สุด'],
      answer: '',
    },
  ];

  const [questions] = useState(questionsData);/* set คำถาม */
  const [currentQuestion, setCurrentQuestion] = useState(0); /* set คำถามปัจจุบัน ให้ useState = 0 */
  const [selectedOption, setSelectedOption] = useState('');  /* set ค่าที่เลือกไว้ ให้ useState ว่าง */
  const [score, setScore] = useState(0); /* set score ให้มีค่าเป็น = 0 */
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (event, option) => {
    setSelectedOption(option);
    highlightButton(event.target);
  };

  function removeHighlight() {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('highlight');
    }
  }

  const handleNextQuestion = () => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    if (isCorrect) { setScore(score + 1); /* นับ score */
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption('');
      removeHighlight(); // Remove highlight when moving to the next question
    } else {
      setShowScore(true);
    }
  };

  function highlightButton(button) {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === button) {
        buttons[i].classList.add('highlight');
      } else {
        buttons[i].classList.remove('highlight');
      }
    }
  }
  
  
  return (
    <Row justify="center">
      <Col span={18}>
        {showScore ? (
          <div className="question">
            Your Score: {score} / {questions.length}
          </div>
        ) : (
          <>
            <div className="question">
              <h2>Question {currentQuestion + 1}</h2>
              <p>{questions[currentQuestion].question}</p>
            </div>
            <div className="answer">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index}>
                <button
                  type="button"
                  className="answer-button"
                  onClick={(event) => { handleOptionSelect(event, option);}}
                  style={{ margin: '17px' }}
                >
                  {option}
                  </button>
                </div>
              ))}
            </div>
            <div>
              <button
                className="next"
                onClick={handleNextQuestion}
                disabled={!selectedOption}
              >
                Next
              </button>
            </div>
          </>
        )}
      </Col>
    </Row>
  );
};

export default QuestionBox;