const Feedback = ({feedback,totalFeedback, positiveFeedback}) => {
    return (
        <ul>
            <p >good: {feedback.good}</p>
            <p >neutral: {feedback.neutral}</p>
            <p >bad: {feedback.bad}</p>
            <p>Total Feedback: {totalFeedback}</p>
            <p>Positive Feedback: {positiveFeedback}%</p>
        </ul>
    )
}

export default Feedback;