import React, { Component } from 'react'
import styles from "../../styles/Home.module.css";
import AnimatedStyle from "../../styles/Animation.module.css";
interface PropsTypes{
    children : React.ReactNode
}
export default class Container extends Component<PropsTypes> {
  render() {
    return (
        <div className={styles.container +" "+ AnimatedStyle.fade_in} >
            {this.props.children}
        </div>
    )
  }
}
