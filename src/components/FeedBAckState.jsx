import PropTypes from "prop-types"

const FeedBAckState = ({feedBack}) => {

    //calculate ratings avg

    let average = feedBack.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedBack.length

average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
        <h4>{feedBack.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedBAckState.PropTypes = {
    feedBack : PropTypes.array.isRequired,
}

export default FeedBAckState