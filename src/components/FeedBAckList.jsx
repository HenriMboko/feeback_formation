import FeedBack from "./FeedBack";

function FeedBAckList({ feedBackList, handleDelete  }) {
  if (!feedBackList || feedBackList.length === 0) {
    return <p>No FeedBack Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedBackList.map((item) => {
        return <FeedBack key={item.id} item={item} 
        handleDelete = {handleDelete}
        />;
      })}
    </div>
  );
}

export default FeedBAckList;
