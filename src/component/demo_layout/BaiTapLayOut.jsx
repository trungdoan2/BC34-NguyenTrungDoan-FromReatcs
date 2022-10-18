import React, { Component } from 'react'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import NavigationComponent from './NavigationComponent'

export default class BaiTapLayOut extends Component {
    render() {
        return (
            <div className='row'>
                <HomeComponent />
                <HeaderComponent />
                <NavigationComponent />
                <ContentComponent />
                <FooterComponent />
            </div>
        )
    }
}
