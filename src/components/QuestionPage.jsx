import React, { useState } from 'react'
import { useEffect } from 'react';
import { Score } from './Score';

function shuffle(arr) {
        const length = arr.length;
        const result = new Array(length);
        let remaining = arr.slice();
        
        for (let i = 0; i < length; i++) {
          // Randomly select an element from the remaining elements.
          const selectedIndex = Math.floor(Math.random() * remaining.length);
          
          // Add the selected element to the result array.
          result[i] = remaining.splice(selectedIndex, 1)[0];
        }
        return result;
      }


//current
export const QuestionPage = ({fetchedQuestions}) => {
    // State for the questio being displayed
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [quizComplete, setQuizComplete] = useState(false)
    // To disable clicking options after the question has been attempted once.
    const [disabled, setDisabled] = useState(false)
    //State for the score of the current session
    const [score, setScore] = useState(0)
    // Add the Correct Answer to the array of incorrect Answers, then shuffle them.
    const options = fetchedQuestions[currentQuestion].incorrectAnswers.concat(fetchedQuestions[currentQuestion].correctAnswer)
    const [shuffled, setShuffled] = useState([])
    const alphabets = ["A", "B", "C", "D"]

    useEffect(()=>{
        setShuffled(shuffle(options))
    }, [currentQuestion])

    //Disable buttons after attempting once, then increase the score if the guess was right.
    const handleCorrectAnswer = (answer) => {
        setDisabled(true)
        if (answer === fetchedQuestions[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }
      }

      //Display the next question, then
      const nextQuestion = currentQuestion + 1
      const handleNext = () => {
        
        if (nextQuestion < fetchedQuestions.length && disabled) {
            setCurrentQuestion(nextQuestion)
            setDisabled(!disabled)
        } else if (nextQuestion === fetchedQuestions.length) {
            setQuizComplete(true)
            
        }
      }

  return (
    <>
        {
            quizComplete ? <Score score={score} length={fetchedQuestions.length} /> :         
            <div className='bg-[#FCE0B0] h-[100vh] pt-8 shadow-lg'>
            <p className='text-center font-semibold text-xl w-fit py-2 px-4 mx-auto bg-[#FDAB71]'>{`${currentQuestion +1}/${fetchedQuestions.length}`}</p>
            <div className='w-[96%] max-w-sm md:max-w-3xl mx-auto bg-[#49302B] mt-8 md:grid grid-cols-2 px-2 py-9'>
                {/* left side */}
                <div className='bg-[#FDFBEE] px-2 py-5 h-fit mb-6 md:mb-0 min-h-[150px] text-2xl rounded-lg'>
                    <div>{` ${currentQuestion + 1})  ${fetchedQuestions[currentQuestion].question}`}</div>
                </div>
                {/* Right Side */}
                <div className='md:ml-4'>
                    {
                        shuffled.map((ans, index)=>{
                            return <div>
                                    <button disabled={disabled} className={` ${disabled ? ans === fetchedQuestions[currentQuestion].correctAnswer ? "border-4 shadow-xl border-solid border-green-800":"border-2 border-solid border-red-800" : ""} text-left py-2 px-2 block mb-4 h-fit min-h-[56px] bg-[#FDFBEE] w-full rounded-xl`} key={index} value={ans} onClick={()=>{handleCorrectAnswer(ans)}}><span className='h-fit px-3 py-2 w-fit rounded-full text-center bg-[#CFCFCF]'>{alphabets[index]}.</span> {ans}</button>
                                   </div>
                        })
                    }
                </div>
            </div>
            <div className='text-right w-[96%] max-w-sm md:max-w-3xl mx-auto mt-2'>
                <button className='bg-[#FDAB71] text-[#49302B] text-2xl w-20 h-12 rounded-lg' onClick={handleNext}>{currentQuestion + 1 === fetchedQuestions.length ? "Finish" : "Next"}</button>
            </div>
            
            
        </div>
        }
    </>
  )
}