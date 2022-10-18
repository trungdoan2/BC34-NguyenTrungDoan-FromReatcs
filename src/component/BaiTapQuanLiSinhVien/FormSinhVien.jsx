import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  };

  static getDerivedStateFromProps(newProps,currentState) {
    if (newProps.sinhVienUpdate != "" && newProps.sinhVienUpdate.maSV != currentState.values.maSV) {
        return {...currentState, values: newProps.sinhVienUpdate}
    }
    }

  handleChange = (e) => {
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;

    let errorMessage = "";

    if (value === "") {
      errorMessage = name + "không được bỏ trống";
    }

    if (type === "email" || type === "number") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = name + "Không đúng định dạng";
      }
    }

    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorMessage };

    this.setState(
      {
        values: values,
        errors: errors,
      },
      () => {}
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state.values);
  };

  renderButtonSubmit = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] != "") {
        valid = false;
      }
    }
    if (valid) {
      return (
        <button type="submit" className="btn btn-success">
          Thêm Sinh Viên
        </button>
      );
    }
    return (
      <button type="submit" className="btn btn-success" disabled>
        Thêm Sinh Viên
      </button>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            <h3>Thông Tin Sinh Viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    name="maSV"
                    type= "number"
                    value={this.props.sinhVienUpdate.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    type= "text"
                    value={this.props.sinhVienUpdate.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Số Điện Thoại</span>
                  <input
                    type="number"
                    pattern="^(0|[1-9][0-9]*)$"
                    className="form-control"
                    name="soDienThoai"
                    value={this.props.sinhVienUpdate.soDienThoai}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="form-group col-6">
                  <span>email</span>
                  <input
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="form-control"
                    name="email"
                    value={this.props.sinhVienUpdate.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-align">
                  {this.renderButtonSubmit()}
                </div>
              </div>
            </form>
          </div>
        </div>
      <div>
      </div>
      </div>




    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLiSinhVienReducer.mangSinhVien,
    sinhVienUpdate: state.QuanLiSinhVienReducer.sinhVienUpdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSinhVien);
