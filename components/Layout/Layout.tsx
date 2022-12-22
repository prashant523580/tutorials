import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
interface PropsTypes {
    children : React.ReactNode
}
export default class Layout extends Component<PropsTypes> {
  render() {
    return (
      <main style={{
        display:"flex",
        flexDirection:"column",
        height:"100vh"
      }}>
            <Navbar/>
                {this.props.children}
            <Footer/>
      </main>
    )
  }
}
