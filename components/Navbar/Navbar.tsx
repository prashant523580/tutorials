import withRouter, { WithRouterProps } from 'next/dist/client/with-router';
import Link from 'next/link'
import React, { Component } from 'react'
import styles from "../../styles/Navbar.module.css";
class  Navbar extends Component<WithRouterProps> {

  render() {
    let links = [
      {
        label : "home",
        path:"/"
      },
      
      {
        label : "tutorials",
        path:"/tutorials"
      },
      {
        label : "blogs",
        path:"/blogs"
      },
      {
        label : "about us",
        path:"/about"
      },
      {
        label : "contact us",
        path: "/contact"
      }
    ]
    return (
      <>
     
        <nav className={styles.nav}>
            {/* <header>header</header> */}
            <div className={styles.logo}>logo</div>
            <div className={styles.nav_link}>
              {
                links.map((link:any ,i : any) =>{
                  return(
                    <Link  href={link.path} className={this.props.router.pathname == link.path? styles.link +" " + styles.active : styles.link} key={link.label}>  {link.label} </Link>
                    
                  )
                })
              }
                {/* <Link className={this.props.router.pathname == "/" ? "active" : ""} href={"/blogs"}> blogs</Link>
                <Link className={this.props.router.pathname == "/" ? "active" : ""} href={"/tutorials"}>tutorials</Link>
                <Link className={this.props.router.pathname == "/" ? "active" : ""} href={"/contact"}> contact</Link>
                <Link className={this.props.router.pathname == "/" ? "active" : ""} href={"/about"}>about</Link> */}
            </div>
        </nav>
      </>
    )
  }
}
export default withRouter(Navbar);