/* eslint-disable arrow-body-style */
// Write your code here
import './index.css'

const CommentItem = () => {
  return (
    <div className="comment">
      <div className="com-card">
        <div>
          <p className="color">c</p>
        </div>
        <div>
          <div className="com-card2">
            <h1 className="com-head">Rohith Kollipara</h1>
            <p className="time">5 min ago</p>
          </div>

          <p className="com-para">hi this is rohith</p>
        </div>
      </div>
      // eslint-disable-next-line react/self-closing-comp
      <div></div>
    </div>
  )
}

export default CommentItem
