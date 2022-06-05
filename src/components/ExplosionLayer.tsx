import * as React from "react";
import { useRef } from "react";

import { RFeature, RLayerStamen, RLayerTile, RLayerVector,  ROverlay, RStyle } from "rlayers";
import { Circle, Point } from "ol/geom";
import { Fill, Stroke, Style } from "ol/style";
import { Coordinate } from "ol/coordinate";
import ExplosionSimulator, {ExplosionParams} from "../explosion/ExplosionSimulator";

interface ExplosionLayerProps {
    targetCenter: Coordinate;
    onShockWaveSizeChanged: Function;
    onFireBallSizeChanged: Function;
}

function ExplosionLayer(props:ExplosionLayerProps) {

    const targetCenter = props.targetCenter;

    const onExplosionSimulatorTick = (explosionData:ExplosionParams) => {
        console.log('onExplosionSimulatorTick', explosionData);
        setExplosion(explosionData);
        setShockWaveGeometry(new Circle(targetCenter, explosionData.shockWaveSize));
    }

    const flashRef = useRef(null);
    const [center, setCenter] = React.useState(targetCenter);
    const [explosionSimulator, setExplosionSimulator] = React.useState(new ExplosionSimulator(onExplosionSimulatorTick));
    const [explosion, setExplosion] = React.useState(new ExplosionParams);
    const [shockWaveGeometry, setShockWaveGeometry] = React.useState(new Circle(targetCenter, 0));

    React.useEffect(() => {
        console.log('explosion', explosion);
    }, [explosion]);

    return (
        <RLayerVector zIndex={10}>
            {/* Shock wave */}
            <RFeature
                ref={flashRef}
                geometry={shockWaveGeometry} 
                style={new Style({
                    stroke: new Stroke({
                        color: 'rgba(255, 100, 50, 1)',
                        width: 10,
                        lineCap: "round"
                    }),
                })}
            />
            {/* Fireball */}
            <RFeature
                ref={flashRef}
                geometry={new Circle(center, explosion.fireballSize)} 
                style={new Style({
                    fill: new Fill({
                        color: 'rgba(255, 100, 50, 0.7)'
                    })
                })}
            />
        </RLayerVector>
    );
}

export default ExplosionLayer;
