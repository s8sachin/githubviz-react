import React from 'react';

import {
  Hint,
  Sunburst
} from 'react-vis';

// import {
//   EXTENDED_DISCRETE_COLOR_RANGE as COLORS
// } from 'theme';

const DATA = {
  children: [
    {children: [
      {bigness: 1, children: [], name: 'excellent'},
      {bigness: 1, children: [], name: 'chart'}
    ]},
    {
      bigness: 1,
      children: [],
      name: 'cool',
      labelStyle: {
        fontSize: 15,
        fontWeight: 'bold'
      }
    },
    {bigness: 1, children: [], name: 'dogs'},
    {bigness: 1, children: [], name: 'sunglasses'},
    {children: [
      {bigness: 1, children: [], name: 'great'},
      {bigness: 1, children: [], name: 'label'}
    ]}
  ]
};

const tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};
const boxStyle = {height: '10px', width: '10px'};

function buildValue(hoveredCell) {
  const {radius, angle, angle0} = hoveredCell;
  const truedAngle = (angle + angle0) / 2;
  return {
    x: radius * Math.cos(truedAngle),
    y: radius * Math.sin(truedAngle)
  };
}

export default class SunburstWithTooltips extends React.Component {
  state = {
    hoveredCell: false
  }
  render() {
    const {hoveredCell} = this.state;
    return (
      <Sunburst
        data={DATA}
        style={{stroke: '#fff'}}
        onValueMouseOver={v => this.setState({hoveredCell: v.x && v.y ? v : false})}
        onValueMouseOut={v => this.setState({hoveredCell: false})}
        height={300}
        margin={{top: 50, bottom: 50, left: 50, right: 50}}
        getLabel={d => d.name}
        getSize={d => d.bigness}
        getColor={d => d.clr}
        width={350}>
        {hoveredCell ? <Hint value={buildValue(hoveredCell)}>
          <div style={tipStyle}>
            <div style={{...boxStyle, background: hoveredCell.clr}}/>
            {hoveredCell.clr}
          </div>
        </ Hint> : null}
      </Sunburst>
    );
  }

}