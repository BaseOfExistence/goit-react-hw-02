import { useState } from "react"
import { useEffect } from "react"
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification"
import css from "./App.module.css"

const checkData = () => {
  if (localStorage.getItem("data") !== null) {
    return JSON.parse(localStorage.getItem("data"))
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0
  }
}
export default function App() {
  const [data, setData] = useState(checkData)
  const totalFeedback = data.good + data.neutral + data.bad;
  const positive = Math.round((data.good / totalFeedback) * 100)

  const updateFeedback = feedbackType => {
    setData({
      ...data,
      [feedbackType]: data[feedbackType] + 1
    })
  }
  const resetFeedback = () => {
    setData({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])
  return (
    <div className={css.container}>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? <Notification /> : <Feedback data={data} totalFeedback={totalFeedback} positive={positive} />}
    </div>
  )
}


