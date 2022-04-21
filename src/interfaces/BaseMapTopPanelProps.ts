import { TelemetryData } from "../geosimulation/TelemetryData";

interface BaseMapTopPanelProps {
    flagNewBtn: boolean;
    onClickNew: Function;
    telemetry: TelemetryData
}

export default BaseMapTopPanelProps;