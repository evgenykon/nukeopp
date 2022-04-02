import * as React from "react";
import BaseFlagProps from "../interfaces/BaseFlagsProps";

export default class BaseFlag extends React.Component<BaseFlagProps, {}> {
  constructor (props: BaseFlagProps){
    super(props);
  }

  render() {
    return (  
      <a className={'flag-item' + (this.props.isActive ? ' active' : '')} onClick={(event: any) => {
        this.props.onClick(this.props.code)
      }}>
        <img src={this.props.src} />
      </a>
    );
  }
}