import * as React from "react";
import BaseMapTopPanelProps from "../interfaces/BaseMapTopPanelProps";
export default class BaseMapTopPanel extends React.Component<BaseMapTopPanelProps, {}> {
    constructor (props: BaseMapTopPanelProps){
        super(props);
    }
    render() {
        let newBtn = null;
        if (this.props.flagNewBtn) {
            newBtn = <button className="btn" type="button" onClick={this.props.onClickNew}>New button</button>
        }
        return (
            <div className="topPanel">
                {newBtn}
            </div>
        );
    }
  
}

