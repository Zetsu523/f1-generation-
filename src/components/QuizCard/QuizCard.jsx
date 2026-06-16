import { useMemo, useState } from 'react'
import './QuizCard.css'

function QuizCard({ title = 'Mini quiz', questions }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [answered, setAnswered] = useState(false)

  const currentQuestion = questions[currentIndex]
  const isCorrect = answered && selectedIndex === currentQuestion.answerIndex
  const progressLabel = useMemo(
    () => `${currentIndex + 1}/${questions.length}`,
    [currentIndex, questions.length],
  )

  const chooseAnswer = (answerIndex) => {
    setSelectedIndex(answerIndex)
    setAnswered(true)
  }

  const goNext = () => {
    setSelectedIndex(null)
    setAnswered(false)
    setCurrentIndex((index) => (index + 1) % questions.length)
  }

  return (
    <article className="quiz-card">
      <div className="quiz-card__topline">
        <p>{title}</p>
        <span>{progressLabel}</span>
      </div>
      <h3>{currentQuestion.question}</h3>
      <div className="quiz-card__answers">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedIndex === index
          const isAnswer = currentQuestion.answerIndex === index
          const stateClass =
            answered && isSelected
              ? isAnswer
                ? 'quiz-card__answer--correct'
                : 'quiz-card__answer--wrong'
              : ''

          return (
            <button
              key={option}
              className={`quiz-card__answer ${stateClass}`}
              type="button"
              aria-pressed={isSelected}
              onClick={() => chooseAnswer(index)}
            >
              {option}
            </button>
          )
        })}
      </div>
      {answered ? (
        <div className={`quiz-card__feedback ${isCorrect ? 'quiz-card__feedback--correct' : ''}`}>
          <p>{isCorrect ? 'Bonne réponse.' : 'Pas tout à fait.'}</p>
          <span>{currentQuestion.explanation}</span>
        </div>
      ) : null}
      <button className="quiz-card__next" type="button" onClick={goNext}>
        Question suivante
      </button>
    </article>
  )
}

export default QuizCard

