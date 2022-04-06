import * as React from "react";
import BaseHistoryCardProps from "../interfaces/BaseHistoryCardProps";


export default class BaseHistoryCard extends React.Component<BaseHistoryCardProps, {}> {
    constructor (props: BaseHistoryCardProps){
      super(props);
    }

    render() {
      return (  
        <div className={"card " + this.props.photoPos}>
          <div className="year">1938</div>
          <div className="date">17 декабря</div>
          <h3>{this.props.title}</h3>
          <img src={this.props.src} className="left photo" />
          <figure className="line"></figure>
          <div className="text">{this.props.text}</div>
          <div className="comment"><a href={this.props.comment}>Источник</a></div>
        </div>
      );
    }
  }