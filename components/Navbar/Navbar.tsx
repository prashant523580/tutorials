import withRouter, { WithRouterProps } from 'next/dist/client/with-router';
import Link from 'next/link'
import React, { Component } from 'react'
import styles from "../../styles/Navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
interface PropsTypes{
  openDrawer :boolean
  navLinkRef : any
}

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
        label : "blogs",
        path:"/allblog"
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
               </div>
            <div className={styles.menu}>
                <button aria-label={"menu"} onClick={() => this.setState({openDrawer : !this.state.openDrawer})}> <MenuIcon/></button>
            </div>
        </nav>
      </>
    )
  }
}
export default withRouter(Navbar);