// import React from 'react';

// import {
//   Hint,
//   Sunburst
// } from 'react-vis';

// import {
//   EXTENDED_DISCRETE_COLOR_RANGE as COLORS
// } from 'theme';

// const DATA = {
//   children: [
//     {children: [
//       {bigness: 1, children: [], clr: COLORS[1], name: 'excellent'},
//       {bigness: 1, children: [], clr: COLORS[2], name: 'chart'}
//     ], clr: COLORS[3]},
//     {
//       bigness: 1,
//       children: [],
//       clr: COLORS[4],
//       name: 'cool',
//       labelStyle: {
//         fontSize: 15,
//         fontWeight: 'bold'
//       }
//     },
//     {bigness: 1, children: [], clr: COLORS[5], name: 'dogs'},
//     {bigness: 1, children: [], clr: COLORS[6], name: 'sunglasses'},
//     {children: [
//       {bigness: 1, children: [], clr: COLORS[7], name: 'great'},
//       {bigness: 1, children: [], clr: COLORS[8], name: 'label'}
//     ], clr: COLORS[9]}
//   ]
// };

// const tipStyle = {
//   display: 'flex',
//   color: '#fff',
//   background: '#000',
//   alignItems: 'center',
//   padding: '5px'
// };
// const boxStyle = {height: '10px', width: '10px'};

// function buildValue(hoveredCell) {
//   const {radius, angle, angle0} = hoveredCell;
//   const truedAngle = (angle + angle0) / 2;
//   return {
//     x: radius * Math.cos(truedAngle),
//     y: radius * Math.sin(truedAngle)
//   };
// }

// export default class SunburstWithTooltips extends React.Component {
//   state = {
//     hoveredCell: false
//   }
//   render() {
//     const {hoveredCell} = this.state;
//     return (
//       <Sunburst
//         data={DATA}
//         style={{stroke: '#fff'}}
//         onValueMouseOver={v => this.setState({hoveredCell: v.x && v.y ? v : false})}
//         onValueMouseOut={v => this.setState({hoveredCell: false})}
//         height={300}
//         margin={{top: 50, bottom: 50, left: 50, right: 50}}
//         getLabel={d => d.name}
//         getSize={d => d.bigness}
//         getColor={d => d.clr}
//         width={350}>
//         {hoveredCell ? <Hint value={buildValue(hoveredCell)}>
//           <div style={tipStyle}>
//             <div style={{...boxStyle, background: hoveredCell.clr}}/>
//             {hoveredCell.clr}
//           </div>
//         </ Hint> : null}
//       </Sunburst>
//     );
//   }

// }


import React from 'react';

import ShowcaseButton from 'react-showcase';
import {
  XYPlot,
  ArcSeries,
  XAxis,
  YAxis
} from 'react-vis';

// import {EXTENDED_DISCRETE_COLOR_RANGE as COLORS} from 'theme';

const PI = Math.PI;

function updateData() {
  const divider = Math.floor(Math.random() * 8 + 3);
  const newData = [...new Array(5)].map((row, index) => {
    return {
      color: index,
      radius0: Math.random() > 0.8 ? Math.random() + 1 : 0,
      radius: Math.random() * 3 + 1,
      angle: (index + 1) * PI / divider,
      angle0: index * PI / divider
    };
  });
  return newData.concat([{angle0: 0, angle: PI * 2 * Math.random(), radius: 1.1, radius0: 0.8}]);
}

function updateLittleData() {
  const portion = Math.random();
  return [
    {angle0: 0, angle: portion * PI * 2, radius0: 0, radius: 10},
    {angle0: portion * PI * 2, angle: 2 * PI, radius0: 0, radius: 10}
  ];
}

export default class Arcseries extends React.Component {
  state = {
    data: updateData(),
    littleData: updateLittleData(),
    value: false
  }
  render() {
    return (
      <div>
        <ShowcaseButton
          onClick={() => this.setState({
            data: updateData(),
            littleData: updateLittleData()
          })}
          buttonContent={'UPDATE'} />
        <XYPlot
          xDomain={[-5, 5]}
          yDomain={[-5, 5]}
          width={300}
          height={300}>
          <XAxis />
          <YAxis />
          <ArcSeries
            animation
            radiusDomain={[0, 4]}
            data={this.state.data.map(row => {
              if (this.state.value && this.state.value.color === row.color) {
                return {...row, style: {stroke: 'black', strokeWidth: '5px'}};
              }
              return row;
            })}
          
            onValueMouseOver={row => this.setState({value: row})}
            onSeriesMouseOut={() => this.setState({value: false})}
            colorType={'category'}/>
          <ArcSeries
            animation
            radiusType={'literal'}
            center={{x: -2, y: 2}}
            data={this.state.littleData}
            colorType={'literal'}/>

        </XYPlot>
      </div>
    );
  }
}