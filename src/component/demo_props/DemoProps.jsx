import React, { Component } from 'react'
import ChildProps from './ChildProps'

export default class DemoProps extends Component {

  state = {
    number: 1
  }

  changeNumber = () => {
    this.setState({ number: 2 })
  }

  render() {

    return (
      <div>
        {/* 
        props dùng để truyền dữ liệu từ component cha xuống component con 
        truyền hàm cho props thường dùng để thay đổi dữ liệu ở component cha khi đang đứng ở component con
        */}

        <ChildProps propsNumber={this.state.number} changeNumber={this.changeNumber} />


      </div>

    )
  }
}
