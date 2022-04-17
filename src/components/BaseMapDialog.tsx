import * as React from "react";
import BaseMapDialogProps from "../interfaces/BaseMapDialogProps";

export default class BaseMapDialog extends React.Component<BaseMapDialogProps, {}> {
    constructor (props: BaseMapDialogProps){
        super(props);
    }
    render() {
        let closeBtn = null;
        if (this.props.flagShowClose) {
            closeBtn = <div className="close"><a href="#" onClick={this.props.onClose}>&times;</a></div>
        }
        return (
            <div className="base-map-dialog">
                <div className="dialog-header">
                    <div className="title">{this.props.title}</div>
                    {closeBtn}
                </div>
                <div className="dialog-content-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
