import React, { Component } from 'react'

export default class DemoState extends Component {
    // đối tượng mặc định được tạo từ lớp đối tượng Component của react
    state = {
        // thuộc tính của đối tượng state
        number: 0
    }
    render() {

        return (

            <div >
                {/* <button onClick={() => {
                    //hàm load lại hàm render()
                    // gán lại giá trị cho đối tượng state
                    this.setState({
                        spNumber:2,
                        title:"Cyber"
                    })
                    //   spNumber = 2;

                }}>Thay đổi number</button> */}


                <button onClick={() => {

                    let { number } = this.state;

                    this.setState({
                        number: number - 1
                    })
                }}>Giảm</button>

                <h1>{this.state.number}</h1>

                <button onClick={() => {

                    let { number } = this.state;


                    this.setState({
                        number: number + 1
                    })
                }}>Tăng</button>
            </div >

        )
    }
}
