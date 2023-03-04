/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {}

  onClickFormEvent = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="card">
        <div className="card2">
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form onClick={this.onClickFormEvent}>
              <input className="input" type="text" placeholder="Your Name" />
              <br />
              <textarea rows="6" cols="28" placeholder="Your Comment" />
              <br />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
          </div>

          <div>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />

        <div className="comment-card">
          <p className="box">2</p>
          <p>Comments</p>
        </div>

        <div>
          <CommentItem />
        </div>
      </div>
    )
  }
}

export default Comments
