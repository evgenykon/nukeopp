

import * as React from "react";
import BaseCubeProps from "../interfaces/BaseCubeProps";


export default class BaseCube extends React.Component<BaseCubeProps, {}> {
  constructor (props: BaseCubeProps){
    super(props);
  }

  render() {
    return (  
      <div id="person-cube">
        <div className="shape ring backfaces">
          <div className="plane one">1</div>
          <div className="plane two">2</div>
          <div className="plane three">3</div>
          <div className="plane four">4</div>
          <div className="plane five">5</div>
          <div className="plane six">6</div>
          <div className="plane seven">7</div>
          <div className="plane eight">8</div>
          <div className="plane nine">9</div>
          <div className="plane ten">10</div>
          <div className="plane eleven">11</div>
          <div className="plane twelve">12</div>
        </div>
      </div>
    );
  }
}