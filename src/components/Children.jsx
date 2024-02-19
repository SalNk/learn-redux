import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { question, sendAnswer } from '../redux'

export default function Children() {
  const _question = useSelector(question)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Enfant</h1>
      <p>Question de l'APP :  {_question} </p>
      <button
        onClick={() => dispatch(sendAnswer("Message réçu"))}
      >
        Réponse à APP
      </button>
    </div>
  )
}