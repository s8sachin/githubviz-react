import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint, LineMarkSeries, Crosshair, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux';
import browserHistory from '../../history';

const loadingGraphData = [
  {name: "------", graphValues: [{x: '-----', y: 8}, {x: '----', y: 4}, {x: '------', y: 1}]}
];

class TeamsNMembersNPrs extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ mouseOverValue: false })
  }

  handleClick (value) {
    console.log(value)
    browserHistory.push(`/teamAdditionsDeletions/${value}`)
  }

  render() {
    var graphData = this.props.teams_and_members_and_prs[0] ? this.props.teams_and_members_and_prs : loadingGraphData;
    return (
      <XYPlot height={300} width={1000} xType="ordinal" className={this.props.teams_and_members_and_prs[0] ? '' : 'loadingGraphOpacity'}>
        <VerticalGridLines />
        <XAxis tickLabelAngle={-20} />
        <YAxis />
        <HorizontalGridLines tickTotal={5} />
        {graphData && graphData.map((element, index) => {
          {  
            return element && <LineMarkSeries key={index} data={element.graphValues}
              onValueMouseOver={v => this.setState({ mouseOverValue: v })}
              onSeriesMouseOut={v => this.setState({ mouseOverValue: false })}
              // onValueClick={ v => this.handleClick(v) }
            />
          }
        })
        }
        { this.props.teams_and_members_and_prs[0] && this.state.mouseOverValue && 
          <Hint value={this.state.mouseOverValue}>
            <div className='hintStyle'>
              <p>{this.state.mouseOverValue.x} :<br/>{this.state.mouseOverValue.y}</p>
            </div>
          </Hint>
        }
        <DiscreteColorLegend
          orientation="horizontal"
          items={graphData && graphData.map(e => e.name)}
          onItemClick={v => this.handleClick(v)}
        />
      </XYPlot>
    )
  }
}

const mapStateToProps = (state) => {
  const { teams_and_members_and_prs } = state.zoom1;
  return { teams_and_members_and_prs };
}

export default connect(mapStateToProps)(TeamsNMembersNPrs);
