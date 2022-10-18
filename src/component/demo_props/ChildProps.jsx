import React, { Component } from 'react'

export default class ChildProps extends Component {
  render() {
    return (
      <div>
        <h1>

          {this.props.propsNumber}

        </h1>
        <button onClick={() => this.props.changeNumber()}>
          Change number Parrent
        </button>
      </div>
    )
  }
}
