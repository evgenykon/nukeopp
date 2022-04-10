

import * as React from "react";
import BaseRoundPortraitProps from "../interfaces/BaseRoundPortraitProps";


export default class BaseRoundPortrait extends React.Component<BaseRoundPortraitProps, {}> {
  constructor (props: BaseRoundPortraitProps){
    super(props);
  }

  eventHandler = () => {
    this.props.onClick(this.props);
  }

  render() {
    return (  
      <div className="round-portrait" onClick={this.eventHandler}>
        <div className="topLabel">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="textcircle"
                d="M 50 250 C 50 135 135 50 250 50 C 350 50 450 135 450 250"
                transform="rotate(0,520,520)"/>
          </defs>
            <rect width="100%" height="100%" fill="transparent" />
            <text className="circleTextTop">
                <textPath href="#textcircle" textLength="630">{this.props.title}</textPath>
            </text>
          </svg>
        </div>
        <img className="middleImg" src={this.props.img} alt=" " />
        <div className="bottomLabel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <defs>
                <path id="textcircle2"
                    d="M 20 0 C 30 135 150 200 240 200 C 345 200 470 135 480 0"
                    transform="rotate(0,520,520)"/>
            </defs>
                <rect width="100%" height="100%" fill="transparent" />
                <text className="circleTextBottom">
                    <textPath href="#textcircle2" textLength="700">- {this.props.subTitle} --</textPath>
                </text>
            </svg>
        </div>
      </div>
    );
  }
}