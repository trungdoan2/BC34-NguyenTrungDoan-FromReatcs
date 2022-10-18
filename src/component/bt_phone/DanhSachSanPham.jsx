import React, { Component } from 'react'

export default class DanhSachSanPham extends Component {
  render() {
    let { dataPhoneProps, hanldeChiTiet, themGioHang } = this.props;
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
              <button className='btn btn-danger ml-2' onClick={() => themGioHang(phone)}>
                Thêm giỏ hàng
              </button>
            </div>
          })
        }
      </div>
    )
  }
}
