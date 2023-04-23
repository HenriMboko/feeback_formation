import Card from "./shared/Card"
import {FaTimes} from 'react-icons/fa'


const FeedBack = ({item, handleDelete}) => {

    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('')


const handleClick = (id)=>{

}

  return (
    <Card reverse = {true}>
      <div className="num-display">{item.rating}</div> 

      <button className="close" 
        onClick={()=>handleDelete(item.id)}
      >
        <FaTimes color='purple' />
      </button>
      <div className="text-display">
        {item.text}
      </div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

export default FeedBack