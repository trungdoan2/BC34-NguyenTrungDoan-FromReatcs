import React, { Component } from 'react';
import './demo.css';
import image_react from './react_img.png';
import { connect } from 'react-redux';

 class DemoComponent extends Component {

    //method
    getValue = (value) => {
        const a = value;
        const b = a + 1;
        console.log(b)
    }


    render() {

        // const style = { textAlign: 'center', fontSize: '100px', color: 'blue' }

        const hello = 'Hello React';

        const getTitle = (tieuDe) => {
            alert(tieuDe);
        }

        return (
            <div>
                <h1>{this.props.dataRedux.hoTen}</h1>
                {/* document.querySelector().style.textAlign  */}
                {/* <h1 id="demo" className="demo_style text-danger" >Hello React</h1> */}
                {/* lấy từ folder pubilc, đi từ file index.html */}
                {/* <img src='./react.png' /> */}

                {/* lấy từ thư mục src, phải bỏ hình vào thư mục src mới import sử dụng được */}
                {/* <img src={image_react} /> */}

                <button onClick={() => getTitle("Cybersoft")}>Click</button>

                <input onChange={(event) => this.getValue(event.target.value)} />

            </div>
        )
    }
}


// lấy dữ liệu từ redux về component
const mapStateToProps = (state) => {
    //dataRedux = {
    //           data: 1
    //      }
    return {
      dataRedux: state.DemoReducer
    }
  }
  
export default connect(mapStateToProps, null)(DemoComponent)
  