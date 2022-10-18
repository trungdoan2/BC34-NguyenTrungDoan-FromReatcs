import React, { Component } from 'react';
import dataFilm from './DataFilms.json';

export default class BaiTapMovie extends Component {

  state = {
    movieDetail: {
      maPhim: 1286,
      tenPhim: "Batman v Superman: Dawn of Justice",
      biDanh: "batman-v-superman-dawn-of-justice",
      trailer: "https://www.youtube.com/embed/0WWzgGyAH6Y",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
      moTa: "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5
    }
  }

  render() {
    let { movieDetail } = this.state;


    return (
      <div className='container row'>
        <div className="m-4 col-md-12 row" style={{ width: 400 }}>

          <div className='col-md-6'>
            <img className="card-img-top" src={movieDetail.hinhAnh} alt="Card image" />
          </div>

          <div className="col-md-6 ">
            <h4 className="card-title">{movieDetail.tenPhim}</h4>
            <p className="card-text">{movieDetail.moTa}</p>
            <p>Ngày khởi chiếu: {movieDetail.ngayKhoiChieu}</p>
            <p>Đánh giá: {movieDetail.danhGia} sao</p>
            <iframe width="420" height="315"
              src={movieDetail.trailer}>
            </iframe>
          </div>

        </div>

        {
          dataFilm.map((movieDetail, index) => {

            return <div>
              <h1>{movieDetail.tenPhim}</h1>
              <span>{movieDetail.moTa}</span>
              <button className='btn btn-success' onClick={() => {
                this.setState({
                  movieDetail
                })
              }}>Detail</button>
            </div>

            // return <div key={index} className="m-4 col-md-3 card" style={{ width: 400 }}>
            //   <img className="card-img-top" src={movie.hinhAnh} alt="Card image" />
            //   <div className="card-body">
            //     <h4 className="card-title">{movie.tenPhim}</h4>
            //     <p className="card-text">{movie.moTa}</p>
            //   </div>

            //   <button className='btn btn-success' onClick={() => {
            //     this.setState({
            //       movieDetail: movie
            //     })
            //   }}>Detail</button>
            // </div>
          })
        }


      </div>
    )
  }
}
