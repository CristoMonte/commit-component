import React, { Component } from 'react'
import '../style/CommentInput.scss'

class CommentInput extends Component {
  static _name = 'default'

  constructor () {
    super()
    this.state = {
      username: 'default-name'
    }
    this.input = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit (event) {
    console.log(this.input.current.value, '_name.value')
    console.log(event, 'event')
    // console.log('A name was submitted: ' + this.input.current.value);
    // event.preventDefault();
  }

  handleInput (event) {
    console.log(event.target.value, 'input')
  }

  render () {
    return (
      <div className="comment-input">
        <div className="input-wrapper">
          <label>用户名：</label>
          <input type="text" value={this.props.name} onChange={this.props.inputChange}/>
        </div>
        <div className="textarea-wrapper">
          <label>评论内容：</label>
          <textarea
            cols="30" rows="5"
            value={this.props.comment}
            onChange={this.props.textareaChange}
            autoFocus
          >
          </textarea>
        </div>
        <div className="opration-wrapper">
          <button className="publish-btn" onClick={this.props.submit}>发布</button>
        </div>
      </div>
    )
  }
}
 export default CommentInput
