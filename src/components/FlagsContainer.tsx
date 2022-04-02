import * as React from "react";
import BaseFlagProps from "../interfaces/BaseFlagsProps";
import BaseFlag from "./BaseFlag";

interface FlagsContainerProps {
    flags: Array<BaseFlagProps>
}

export default class FlagsContainer extends React.Component<FlagsContainerProps, {}> {
constructor (props: FlagsContainerProps){
  super(props);
}
render() {
  return (  
        <div id="flags-container">
            <div></div>
            {this.props.flags.map(function(flag, i){
                return <BaseFlag key={i} src={flag.src} code={flag.code} isActive={flag.isActive} onClick={flag.onClick} />;
            })}
        </div>
    );
  }
}