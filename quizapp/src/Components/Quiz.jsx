import React from 'react'
import { useState } from 'react';
import './quizstyle.css'


const QuizComp = () => {
    // Questions of the Quiz 
    var Questionbank = [  
        {
            Question: "How many states does India have?",
            Answers: [
                { Answer: "29", isCorrect: true },
                { Answer: "28", isCorrect: false },
                { Answer: "27", isCorrect: false },
                { Answer: "21", isCorrect: false }
            ]
        },
        {
            Question: "Who is the current Prime Minister of India?",
            Answers: [
                { Answer: "Amit Shah", isCorrect: false },
                { Answer: "Narendra Modi", isCorrect: true },
                { Answer: "Rahul Gandhi", isCorrect: false },
                { Answer: "Arvind Kejriwal", isCorrect: false }
            ]
        }, {
            Question: "The Value of 2 (3 + 2) / 5 + 4 - 2 is ___?",
            Answers: [
                { Answer: "1.42", isCorrect: true },
                { Answer: "1.12", isCorrect: false },
                { Answer: "1.11", isCorrect: false },
                { Answer: "1.40", isCorrect: false }
            ]
        },
        {
            Question: "Gir National Park in Gujarat is famous for?",
            Answers: [
                { Answer: "Monkey", isCorrect: false },
                { Answer: "Leopard", isCorrect: false },
                { Answer: "Lion", isCorrect: true },
                { Answer: "Cheetah", isCorrect: false }
            ]
        },
        {
            Question: "How many colours are there in India’s National Flag?",
            Answers: [
                { Answer: "Four", isCorrect: false },
                { Answer: "Six", isCorrect: false },
                { Answer: "Three", isCorrect: true },
                { Answer: "Five", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

 // To handle the response of all answers of the Quiz   
const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

// To Reset the Quiz
const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        
        <div className='app'>
             <h2> Let's Play Quiz! </h2>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit" onClick={resetQuiz}> Reset </button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default QuizComp;

