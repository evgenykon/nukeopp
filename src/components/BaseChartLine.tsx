import * as React from "react";
import { ResponsiveLine } from '@nivo/line'
const BaseChartLine = ({data}) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: "time",
          format: "%H:%M",
          precision: "minute",
          useUTC: false
        }}
        yFormat="time:%Hh %Mm"
        axisLeft={{
          format: "%H:%M",
          legendOffset: 0,
          legendPosition: "start"
        }}
        curve="step"
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        
    />
)
export default BaseChartLine;