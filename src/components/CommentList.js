import React, { Component } from 'react'
import Comment from './Comment'
import '../style/CommentList.scss'

class CommentList extends Component {
  // constructor () {
  //   super()
  //   console.log('constructor', Date.now())
  // }

  componentWillMount () {
    // console.log('componentWillMount', Date.now())
  }

  componentWillUpdate () {
    // console.log('componentWillUpdate', Date.now())
  }

  componentWillReceiveProps () {
    // console.log('componentWillReceiveProps', Date.now())
  }
  componentDidMount () {
    // console.log('componentDidMount', Date.now())
  }
  componentDidCatch () {
    // console.log('componentDidCatch', Date.now())
  }
  componentDidUpdate () {
    // console.log('componentDidUpdate', Date.now())
  }
  componentWillUnmount () {
    // console.log('componentWillUnmount', Date.now())
  }
  render () {
    // console.log('render', Date.now())
    const commentListEle = this.props.commentList.map((item, index, arr) => {
      return (
        <Comment comment={item} key={index}>
          <div className="comment-content">
            <span className="name">{item.name}：</span>
            <span className="content">{item.content}</span>
          </div>
          <div className="comment-time">
            <p className="time"></p>
          </div>
          {/* <div className="">{item.name + '-------' + item.content}</div> */}
        </Comment>
      )
    })
    return (
      <ul className="comment-ul">
        {commentListEle}
      </ul>
    )
  }
}
 export default CommentList