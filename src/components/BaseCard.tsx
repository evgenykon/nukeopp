import * as React from "react";
import BaseCardProps from "../interfaces/BaseCardProps";



export default class BaseCard extends React.Component<BaseCardProps, {}> {
    constructor (props: BaseCardProps){
      super(props);
    }
  
    render() {
      return (  
        <div className={"card " + this.props.photoPos}>
          <h3>{this.props.title}</h3>
          <img src={this.props.src} alt=""/>
          <div>{this.props.text}</div>
          <div>{this.props.comment}</div>
        </div>
      );
    }
  }