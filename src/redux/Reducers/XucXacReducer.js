const stateDefault = {
  isTai: true,
  arrayHinh: [
    "./ImgXucXac/1.png",
    "./ImgXucXac/2.png",
    "./ImgXucXac/3.png",
    "./ImgXucXac/4.png",
    "./ImgXucXac/5.png",
    "./ImgXucXac/6.png"],
  arrayKetQua: [
    "./ImgXucXac/1.png",
    "./ImgXucXac/1.png",
    "./ImgXucXac/1.png",
  ],
  ketQua: 0,
  soBanThang: 0,
  tongBanChoi: 0,
}

export const XucXacReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case "THAY_DOI_CUOC": {
      state.isTai = payload;
      return { ...state };
    }
    case "KET_QUA": {
      let { soBanThang, tongBanChoi, isTai } = state;

      let arrayHinh = [...state.arrayHinh];

      let arrayNew = [];
      let tong = 0;
      // 0 1 2 3 4 5
      //arrayHinh[]
      for (let index = 0; index < 3; index++) {
        let randomIndex = Math.floor(Math.random() * 6);
        let giaTri = randomIndex + 1;
        tong += giaTri
        arrayNew.push(arrayHinh[randomIndex]);
      }

      let soBanThangNew = soBanThang;
      if (isTai == true && tong % 2 == 0) {
        soBanThangNew += 1;
      }
      if (isTai == false && tong % 2 != 0) {
        soBanThangNew += 1;
      }
      // if (isTai) {
      //   if (tong % 2 == 0) {
      //     soBanThangNew += 1;
      //   }
      // } else {
      //   if (tong % 2 != 0) {
      //     soBanThangNew += 1;
      //   }
      // }

      //soBanThangNew += isTai ? tong % 2 == 0 ? 1 : 0 : tong % 2 != 0 ? 1 : 0;
      return {
        ...state,
        arrayKetQua: arrayNew,
        ketQua: tong,
        soBanThang: soBanThangNew,
        tongBanChoi: tongBanChoi + 1,
      }
    }
    default:
      return { ...state };
  }
}