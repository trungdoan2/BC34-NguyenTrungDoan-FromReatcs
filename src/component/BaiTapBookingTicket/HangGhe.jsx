import React, { Component } from 'react';
import {connect} from 'react-redux';
import { datGheAction } from '../../actions/BaiTapDatVeActions';
  class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat ='';
            let disable = false;
            if (ghe.daDat) {
                cssGheDaDat="gheDuocChon"
                disable = true;
            }
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);

            if (indexGheDangDat != -1) {
              cssGheDangDat = 'gheDangChon'
            }
            return <button onClick={() => {this.props.datGhe(ghe)}} disabled={disable} key={index} className={`ghe ${cssGheDaDat}  ${cssGheDangDat}`  }>{ghe.soGhe}</button>
        })
    }

    renderSoHang = () => {
      return    this.props.hangGhe.danhSachGhe.map((hang, index) => {
          return <span className='rowNumber'>
            {hang.soGhe}
          </span>
      })
     
    }

    renderHangGhe = () =>{
    if (this.props.soHangGhe == 0) {
      return <div className='ml-4'>
      {this.props.hangGhe.hang} {this.renderSoHang()}
    </div>
    }else{
      return <div>
      {this.props.hangGhe.hang} {this.renderGhe()}
    </div>
    }
    }



  render() {
    return (
      <div className='text-light text-left ml-5 mt-1' style={{ fontSize: "30px" }}>
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe))
    }
  }
}
 export default connect (mapStateToProps,mapDispatchToProps)(HangGhe);
