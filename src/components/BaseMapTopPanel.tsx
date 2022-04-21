import * as React from "react";
import BaseMapTopPanelProps from "../interfaces/BaseMapTopPanelProps";
export default class BaseMapTopPanel extends React.Component<BaseMapTopPanelProps, {}> {
    constructor (props: BaseMapTopPanelProps){
        super(props);
    }
    render() {
        let newBtn = null;
        if (this.props.flagNewBtn) {
            newBtn = <button className="btn" type="button" onClick={this.props.onClickNew}>New simulation</button>
        }
        let telemetry = null;
        let tweets = null;
        let help = null;
        if (this.props.telemetry.isEnable) {
            telemetry = <div className="telemetry">
                <div className="btns">
                    <button className="btn btnStop" type="button">Escape</button>
                    <button className="btn btnRestart" type="button">Restart</button>
                </div>
                <div className="speed panel-slot">
                    <div className="label">Speed</div>
                    <span className="sensor">0</span> 
                    <span className="units">km/h</span>
                </div>
                <div className="mode panel-slot">
                    <div className="label">Mode</div>
                    <span className="sensor">P / -</span>
                </div>
                <div className="fuel panel-slot">
                    <div className="label">Fuel</div>
                    <span className="sensor">100</span> 
                    <span className="units">%</span>
                </div>
                <div className="fuel panel-slot">
                    <div className="label">Damage</div>
                    <span className="sensor">0</span> 
                    <span className="units">%</span>
                </div>
                <div className="timer panel-slot">
                    <div className="label">Timer</div>
                    <span className="sensor">22:00</span>
                </div>
            </div>
            tweets = <div className="tweets">
{ /*                 <div className="tweet-wrapper">
                <div className="tweet-header">Москва.Новости</div>
                    Завтра в Кремле пройдет концерт О.Газманова, посвященный разгрому печенегов в 1036г
                </div>
                <div className="tweet-wrapper ligher">
                <div className="tweet-header">МЧС</div>
                    возможна угроза ответного ядерного удара со стороны стран НАТО
        </div> */}
            </div>
            help = <div className="help">
                <span className="key top-left">
                    Esc
                </span>
                <span className="key top">
                    <span className="material-symbols-outlined">north</span>
                </span>
                <span className="key left">
                    <span className="material-symbols-outlined">west</span>
                </span>
                <span className="key right">
                    <span className="material-symbols-outlined">east</span>
                </span>
                <span className="key bottom">
                    <span className="material-symbols-outlined">south</span>
                </span>
            </div>
        }
        return (
            <div className="topPanel">
                {newBtn}
                {telemetry}
                {tweets}
                {help}
            </div>
        );
    }
  
}

