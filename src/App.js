import './App.css';
import BaiTapLayOut from './component/demo_layout/BaiTapLayOut';
import DemoComponent from './component/demobuoimot/DemoComponent';
import DemoState from './component/demoState/DemoState';
import BaiTapCar from './component/bt_car_basic/BaiTapCar';
import BaiTapMovie from './component/bt_car_basic/BaiTapMovie';
import DemoProps from './component/demo_props/DemoProps';
// import TrangChuSanPham from './component/bt_phone/TrangChuSanPham';
import DemoRedux from './component/demoRedux/DemoRedux';
import TrangChuSanPham from './component/bt_phone_redux/TrangChuSanPham';
import BaiTapXucXac from './component/bt_xucxac/BaiTapXucXac';
import BaiTapBookingTicket from './component/BaiTapBookingTicket/BaiTapBookingTicket';
import BaiTapForm from './component/BaiTapQuanLiSinhVien/BaiTapForm';


function App() {


  return (
    <div className='App'>
      {/* <DemoComponent /> */}
      {/* <BaiTapLayOut /> */}
      {/* <DemoState /> */}
      {/* <BaiTapCar /> */}
      {/* <BaiTapMovie /> */}
      {/* <DemoProps /> */}
      {/* <TrangChuSanPham /> */}
      {/* <DemoRedux /> */}
      {/* <BaiTapXucXac /> */}
      {/* <BaiTapBookingTicket /> */}
      <BaiTapForm />
    </div>
  );
}

export default App;
