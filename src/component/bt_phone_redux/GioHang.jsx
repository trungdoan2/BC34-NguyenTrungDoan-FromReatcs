import React, { Component } from 'react';
import { connect } from 'react-redux';

class GioHang extends Component {

  render() {

    let { thongTinGioHangTam, gioHang } = this.props;

    return (
      <div>
        <h3 className='text-danger p-5' data-toggle="modal" data-target="#exampleModal" style={{ cursor: "pointer" }}>Giỏ hàng {thongTinGioHangTam}</h3>

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* nội dung giỏ hàng */}
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng đặt</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      gioHang && gioHang.length > 0 && gioHang.map(sanPham => {
                        return <tr>
                          <td>{sanPham.maSP}</td>
                          <td><img className='img-fluid' style={{ height: "50px" }} src={sanPham.hinhAnh} /></td>
                          <td>{sanPham.tenSP}</td>
                          <td>
                            <button className='btn btn-success btn-sm' onClick={
                              () => this.props.dispatch({
                                type: "DOI_SO_LUONG",
                                payload: {
                                  maSP:sanPham.maSP,
                                  soLuong: +1
                                }
                              })
                            }
                            >+</button>
                            {sanPham.soLuong}
                            <button className='btn btn-success btn-sm'
                              onClick={
                                () => this.props.dispatch({
                                  type: "DOI_SO_LUONG",
                                  payload: {
                                    maSP:sanPham.maSP,
                                    soLuong: -1
                                  }
                                })
                              }
                            >-</button>
                          </td>
                          <td>{sanPham.giaBan.toLocaleString()} VNĐ</td>
                          <td>{(sanPham.giaBan * sanPham.soLuong).toLocaleString()} VNĐ</td>
                          <td>
                            <button className='btn btn-danger' onClick={() =>

                              this.props.dispatch({
                                type: "XOA_SAN_PHAM",
                                payload: { maSP: sanPham.maSP }
                              })} >Xóa</button>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducer.gioHang
  }
}

export default connect(mapStateToProps, null)(GioHang)