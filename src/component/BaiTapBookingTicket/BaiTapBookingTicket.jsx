import React, { Component } from 'react';
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGhedata from './danhSachGhe.json';
import HangGhe from './HangGhe';

export default class  extends Component {

renderHangGhe =() => {
  return danhSachGhedata.map((hangGhe,index) => {
    return <div key={{index}} soHangGhe={index}>
          <HangGhe hangGhe={hangGhe} />
    </div>
  })
}



  render() {
    return (
      <div className='bookingMovie' style={{position:"fixed",width: '100%', height: '100%', backgroundImage: "url('./bookingticket/bgmovie.jpg')",backgroundSize: "100%"}}>
        <div style={{position:"fixed",width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)'}}>
            <div className='container-fluid'>
            <div className='row'>
                <div className='col-8 text-center'>
                    <div className=' display-4 text-warning' style={{fontSize: '40px'}}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                    <div className='mt-5 text-light' style={{fontSize: '25px'}}>Màn Hình</div>
                    <div className='mt-2' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        
                        <div className='screen'></div>
                        {this.renderHangGhe()}
                    </div>
                   
                </div>
                <div className='col-4'>
                    <div style={{fontSize: '35px'}} className='display-4 text-warning'>DANH SÁCH GHẾ BẠN CHỌN</div>
                    <ThongTinDatGhe />
                </div>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
