import * as React from "react";
import Select from "react-select";



import StartDialogProps from "../../interfaces/StartDialogProps";
import BaseInputRow from "../BaseInputRow";
import BaseMapDialog from "../BaseMapDialog";
export default class StartDialog extends React.Component<StartDialogProps, {}> {
    constructor (props: StartDialogProps){
        super(props);
        this.state = {
            location: 'msk',
            distance: '5',
            escapeTime: '3',
            surviveTime: '5',
            flagBunkers: false,
            flagServices: false,
            controller: 'keyboard'
        }
    }
    render() {
        const onSubmit = () => {
            this.props.onDialogSubmit(this.state);
        }
        const onLocationChange = (data) => {
            this.setState({ location: data.target.value });
        }
        const onDistanceChange = (data) => {
            this.setState({ distance: data.target.value });
        }
        const onEscapeTimeChange = (data) => {
            this.setState({ escapeTime: data.target.value });
        }
        const onSurviveTimeChange = (data) => {
            this.setState({ surviveTime: data.target.value });
        }
        const onBunkersChange = (data) => {
            this.setState({ flagBunkers: data.target.checked });
        }
        const onServicesChange = (data) => {
            this.setState({ flagServices: data.target.checked });
        }
        const onControllerChange = (data) => {
            this.setState({ controller: data.target.value });
        }
        
        return (
            <BaseMapDialog title='New nuclear explosion simulation' flagShowClose={true} onClose={this.props.onDialogClose}>
                <BaseInputRow label='Location'>
                    <select name="location-select"
                        value={this.state.location} 
                        onChange={onLocationChange}
                    >
                        <option value="msk">Moscow</option>
                    </select>
                </BaseInputRow>
                <BaseInputRow label='Distance from Epicenter'>
                    <select name="location-place-select"
                        value={this.state.distance} 
                        onChange={onDistanceChange}
                    >
                        <option value="0">0 km</option>
                        <option value="1">1 km</option>
                        <option value="3">3 km</option>
                        <option value="10">10 km</option>
                        <option value="random">Random</option>
                    </select>
                </BaseInputRow>
                <BaseInputRow label='Time to escape'>
                    <select name="escape-time"
                        value={this.state.escapeTime} 
                        onChange={onEscapeTimeChange}
                    >
                        <option value="3">3 min</option>
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                        <option value="random">Random (1-10)</option>
                    </select>
                </BaseInputRow>
                <BaseInputRow label='Survive time'>
                    <select name="survive-time"
                        value={this.state.surviveTime} 
                        onChange={onSurviveTimeChange}
                    >
                        <option value="3">3 min</option>
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                        <option value="random">Random (1-10)</option>
                        <option value="unlimit">Unlimit</option>
                    </select>
                </BaseInputRow>
                
                <BaseInputRow label='Controller'>
                    <select name="controller-select"
                        value={this.state.controller} 
                        onChange={onControllerChange}
                    >
                        <option value="msk">Keyboard</option>
                    </select>
                </BaseInputRow>
                <div className='input-row' style={{paddingTop: '10px'}}>
                    <div className='input-label'></div>
                    <div className='input-control'>
                        <button type='button' onClick={onSubmit}>Create simulation</button>
                    </div>
                </div>
            </BaseMapDialog>
        );
    }
  
}

/*<BaseInputRow label='Bunkers'>
                    <input type='checkbox' checked={this.state.flagBunkers} onChange={onBunkersChange} />
                </BaseInputRow>
                <BaseInputRow label='Auto services'>
                    <input type='checkbox' checked={this.state.flagServices} onChange={onServicesChange} />
                </BaseInputRow>*/