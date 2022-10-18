const stateDefault = {
  gioHang: []
}

export const GioHangReducer = (state = stateDefault, action) => {

  const { type, payload } = action;
  switch (type) {
    case "THEM_GIO_HANG": {
      let gioHangNew = [...state.gioHang]; // spread operator

      //kiểm tra sản phẩm đã có trong giỏ hàng chưa
      let sanPham = gioHangNew.find(sanPham => sanPham.maSP == payload.maSP);

      if (sanPham) {
        //TH 2 sản phẩm đã có trong giỏ hàng
        sanPham.soLuong += 1;
      } else {
        //TH 1 là sản phẩm chưa có trong giỏ hàng
        gioHangNew.push({ ...payload, soLuong: 1 });
      }
      // state.gioHang = gioHangNew;
      return { ...state, gioHang: gioHangNew };
    }

    case "XOA_SAN_PHAM": {
      let gioHangNew = [...state.gioHang];

      let index = gioHangNew.findIndex(item => item.maSP == payload.maSP);
      gioHangNew.splice(index, 1);

      return { ...state, gioHang: gioHangNew };
    }

    case "DOI_SO_LUONG": {
      let gioHangNew = [...state.gioHang];

      let sanPhamNew = gioHangNew.find(item => item.maSP == payload.maSP);

      sanPhamNew.soLuong += payload.soLuong;

      // nếu số lượng bằng 0 thì xóa sản phẩm
      if (sanPhamNew.soLuong == 0) {
        let index = gioHangNew.findIndex(item => item.maSP == payload.maSP);
        gioHangNew.splice(index, 1);
      }

      return { ...state, gioHang: gioHangNew };
    }

    default:
      return { ...state };
  }
}