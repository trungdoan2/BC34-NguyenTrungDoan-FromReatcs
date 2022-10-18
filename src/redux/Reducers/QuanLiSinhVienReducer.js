const stateDefault = {
    mangSinhVien :[
      {maSV: 1, hoTen :"Nguyen Van A",soDienThoai: "0909090909",email: "abc@gmail.com"},
      {maSV: 2, hoTen :"Nguyen Van B",soDienThoai: "0909009999",email: "abc@gmail.com"}
    ],
    sinhVienUpdate : ""
    
}

export const QuanLiSinhVienReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case "THEM_SINH_VIEN": {
        const mangSVUpdate = [...state.mangSinhVien,action.sinhVien];
        state.mangSinhVien = mangSVUpdate;
        return{...state}
    }
    case "XOA_SINH_VIEN": {
      let mangSinhVien = [...state.mangSinhVien];

    mangSinhVien = mangSinhVien.filter(sinhVien => sinhVien.maSV != payload);

      return { ...state, mangSinhVien};
    }
    case "LAY_SINH_VIEN": {
      let mangSinhVien = [...state.mangSinhVien];

      let sinhVienTam = mangSinhVien.find(sinhVien => sinhVien.maSV == payload);

      return { ...state, sinhVienUpdate : sinhVienTam };
    }
    
    default: {
        return {...state}
    }

    


        
      
  
   
       
  }




}