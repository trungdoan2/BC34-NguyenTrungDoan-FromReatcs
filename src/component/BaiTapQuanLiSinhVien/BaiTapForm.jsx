import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import Search from './Search'
import TableSinhVien from './TableSinhVien'

export default class 
 extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Bài Tập Form</h3>
        <FormSinhVien />
        {/* <Search /> */}
        <TableSinhVien />
      </div>
    )
  }
}
