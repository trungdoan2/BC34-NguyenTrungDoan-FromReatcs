import React, { Component } from 'react';
import {connect} from "react-redux";

 class TableSinhVien extends Component {
    renderSinhVien = () => {
        const {mangSinhVien }= this.props;
        return mangSinhVien.map((sinhVien,index)=> {
            return (
                <tr key={index}>
                   <td>{sinhVien.maSV}</td>
                   <td>{sinhVien.hoTen}</td>
                   <td>{sinhVien.soDienThoai}</td>
                   <td>{sinhVien.email}</td>
                   <td>
                   <button className='btn btn-danger' onClick={() => this.props.dispatch({
                        type: "XOA_SINH_VIEN",
                        payload: sinhVien.maSV
                      })}>Xóa</button>
                   <button className='btn btn-warning'  onClick={() => this.props.dispatch({
                        type: "LAY_SINH_VIEN",
                        payload: sinhVien.maSV
                      })}>Sửa</button>
                 
                   </td>

                </tr>
            )
        })
    }
  render() {
    console.log(this.props.mangSinhVien);
    return (
      <div className='container'>
        <table class="table">
            <thead>
                <tr className='bg-dark text-white'>
                    <th>Mã SV</th>
                    <th>Họ Tên</th>
                    <th>Số Điện Thoại</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
              {this.renderSinhVien()}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      mangSinhVien: state.QuanLiSinhVienReducer.mangSinhVien,
      sinhVienUpdate: state.QuanLiSinhVienReducer.sinhVienUpdate
    }
}

export default connect(mapStateToProps,null)(TableSinhVien)