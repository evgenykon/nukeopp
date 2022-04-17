import * as React from "react";
import BaseInputRowProps from "../interfaces/BaseInputRowProps";

export default class BaseInputRow extends React.Component<BaseInputRowProps, {}> {
    constructor (props: BaseInputRowProps){
        super(props);
    }
    render() {
        return (
            <div className='input-row'>
                <div className='input-label'>{this.props.label}</div>
                <div className='input-control'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
