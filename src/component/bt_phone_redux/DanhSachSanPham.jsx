import React, { Component } from 'react';
import { connect } from 'react-redux';

class DanhSachSanPham extends Component {
  render() {
   
    let { dataPhoneProps, hanldeChiTiet } = this.props;
    return (
      <div className='row'>
        {
          dataPhoneProps.map((phone, index) => {
            return <div key={index} className='col-4'>

              <img className='img-fluid'
                style={{ height: "400px" }}
                src={phone.hinhAnh} />
              <h3>{phone.tenSP}</h3>
              <h3>{phone.giaBan.toLocaleString()}</h3>
              <button className='btn btn-success' onClick={() =>
                hanldeChiTiet(phone)
              }>
                Xem chi tiết
              </button>
              <button className='btn btn-danger ml-2' onClick={() => this.props.dispatch({
                type:"THEM_GIO_HANG",
                payload:phone
              })} >
                Thêm giỏ hàng
              </button>
            </div>
          })
        }
      </div>
    )
  }
}

export default connect(null, null)(DanhSachSanPham)