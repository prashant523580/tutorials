import React, { Component } from 'react'
interface PropsTypes{
    title: string,
    description: string
}
export default class Card extends Component<PropsTypes> {
  render() {
    return (
        <>
        <style jsx>
            {
                `
                .card{
                    width: 300px;
                    margin: .3em .6rem;
                    background: rgba(225,225,225,0.6);
                    padding: .3em .6em;
                }
                .header{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding: .3em 0;
                }
                .icon{
                    width: 60px;
                    height: 60px;
                    background: gray;
                    border-radius: 50%;
                    margin: 0 .3em;
                }

              
                `
            }
        </style>
      <div className='card'>
            <div className="header">
                <div className="icon">  </div><h2>{this.props.title}</h2>
            </div>
            <div className="description">
                <p>{this.props.description}</p>
            </div>
      </div>
        </>
    )
  }
}
