import React, { Component } from 'react'
import CommentList from '../components/CommentList'
import CommentInput from '../components/CommentInput'
import '../style/CommentApp.scss'

export default class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      content: '',
      commentList: [],
    }
    this.state.name = localStorage.getItem('name') || ''
  }

  handleInputChange (event) {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  handleTextareaChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit () {
    if (!this.state.content) {
      return
    }

    if (!this.state.name) {
      return
    }

    // 持久化用户名
    localStorage.setItem('name', this.state.name)

    const tempArray = this.state.commentList.slice(0)
    // const now = new Date()
    tempArray.push({
      name: this.state.name,
      content: this.state.content
      // date: now.getFullYear() + '-' + now.getMonth
    })
    this.setState({
      commentList: tempArray,
      content: ''
    })
  }
  render () {
    return (
      <div className='comment-wrapper'>
        <CommentInput
          name={this.state.name}
          comment={this.state.content}
          inputChange={this.handleInputChange.bind(this)}
          textareaChange={this.handleTextareaChange.bind(this)}
          submit={this.handleSubmit.bind(this)}
        />
        <CommentList commentList={this.state.commentList}/>
      </div>
    )
  }
}
