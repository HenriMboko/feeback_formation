import {useState} from "react"
import Header from './components/Header'

import FeedBackData from "./data/FedBAckData"
import FeedBAckList from "./components/FeedBAckList"

import FeedBAckState from "./components/FeedBAckState"


function App() {
  
  const [feedBack, setFeedBack] = useState(FeedBackData)


  const deleteFeedBack = (id) =>{

    if(window.confirm('Are you sure you want to delete?')){
      setFeedBack(feedBack.filter((item)=>item.id !== id))
    }
    
  }

  return (
    <>
      <Header />
     <div className='container'>
     <FeedBAckState feedBack={feedBack} /> 
     <FeedBAckList feedBackList={feedBack} 
      handleDelete = {deleteFeedBack}
     />
     </div> 
    </>
  )
}

export default App
