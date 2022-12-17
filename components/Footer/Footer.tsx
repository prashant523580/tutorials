import React, { Component } from 'react'
import styles from "../../styles/Footer.module.css";
export default class Footer extends Component {
  render() {
    return (
     <footer className={styles.footer}>
        <style jsx>
            {`
            .background{
                position : absolute ;
                left: -10% ;
                right: 0 ;
                bottom: 0 ;
                width: 200px;
                height: 200px;
                background :black ;
                border-radius : 50% ;
                z-index: -1;
                ;
               
            }
            `}
        </style>
        <div className="background">
            <div className="circle"></div>
        </div>
            <p>all right reserved.</p>
     </footer>
    )
  }
}
