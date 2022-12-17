import withRouter, { WithRouterProps } from 'next/dist/client/with-router';
import Link from 'next/link'
import React, { Component } from 'react'
import styles from "../../styles/Navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
interface PropsTypes{
  openDrawer :boolean
  navLinkRef : any
}
interface RefTypes extends PropsTypes  {

}

const LinkButton = React.forwardRef(({onClick,href} :any , ref : any) => {
    return(
      <a href={href} onClick={onClick} ref={ref}>={"click"}</a>
    )
})
class  Navbar extends Component<any,PropsTypes,WithRouterProps> {
  constructor(props : any){
    super(props)
    this.state ={
      openDrawer : false,
      navLinkRef : React.createRef()
    }
    this.componentDidMount = () => {
        if(typeof window !== "undefined"){
          window.addEventListener("click" ,(e) => {
              const target = e.target;
              if(!this.state.navLinkRef.current || !this.state.navLinkRef.current.contains(target)){
                this.setState({
                  openDrawer: false
                })
              }
          })
        }
    }
    
  }
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
     
        <nav ref={this.state.navLinkRef} className={styles.nav}>
            {/* <header>header</header> */}
            <div className={styles.logo}>logo</div>
            <div className={styles.nav_link} style={{
              right: this.state.openDrawer? "0" : "-55%"
            }}>
              {
                links.map((link:any ,i : any) =>{
                  return(
                    <Link
                    onClick={()=> this.setState({openDrawer : false}) }
                    href={link.path} 
                    className={this.props.router.pathname == link.path? styles.link +" " + styles.active : styles.link} 
                    key={link.label}>  {link.label} </Link>
                    
                  )
                })
              }
                {/* <Link className={this.props.router.pathname == "/" ? "active" : ""} href={"/blogs"}> blogs</Link>
                <Link className={this.props.router.pathname == "/" ? "active" : ""} href={"/tutorials"}>tutorials</Link>
                <Link className={this.props.router.pathname == "/" ? "active" : ""} href={"/contact"}> contact</Link>
                <Link className={this.props.router.pathname == "/" ? "active" : ""} href={"/about"}>about</Link> */}
            </div>
            <div className={styles.menu}>
                <button onClick={() => this.setState({openDrawer : !this.state.openDrawer})}> <MenuIcon/></button>
            </div>
        </nav>
      </>
    )
  }
}
export default withRouter(Navbar);