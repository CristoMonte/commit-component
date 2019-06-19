import React, { Component } from 'react'
import '../style/Comment.scss'

class Comment extends Component {
  render () {
    if (this.props.children) {
      return (
        <li className="comment-cell">
          {this.props.children}
          {/* <span className="name">{this.props.comment.name}：</span>
          <span className="content">{this.props.comment.content}</span> */}
        </li>
      )
    } else {
      return (
        <li className="comment-cell">
          {/* {this.props.children} */}
          <span className="name">{this.props.comment.name}：</span>
          <span className="content">{this.props.comment.content}</span>
        </li>
      )
    }
  }
}
 export default Comment