export default function Feedback({totalFeedback, positive, data: { good, neutral, bad } }) {
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positive}%</p>
        </>
    )
}