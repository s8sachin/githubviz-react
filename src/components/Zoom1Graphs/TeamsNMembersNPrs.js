import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint, LineMarkSeries, Crosshair, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux';

class TeamsNMembersNPrs extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ mouseOverValue: false })
  }

  render() {
    return (
      <XYPlot height={300} width={1000} xType="ordinal">
        <VerticalGridLines />
        <XAxis tickLabelAngle={-20} />
        <YAxis />
        <HorizontalGridLines tickTotal={5} />
        {this.props.teams_and_members_and_prs && this.props.teams_and_members_and_prs.map((element, index) => {
          {
            return element && <LineMarkSeries key={index} data={element.graphValues}
              onValueMouseOver={v => this.setState({ mouseOverValue: v })}
              onSeriesMouseOut={v => this.setState({ mouseOverValue: false })}
            />
          }
        })
        }
        {this.state.mouseOverValue && <Hint value={this.state.mouseOverValue} />}
        <center><DiscreteColorLegend
          orientation="horizontal"
          items={this.props.teams_and_members_and_prs && this.props.teams_and_members_and_prs.map(e => e.name)}
        /></center>
      </XYPlot>
    )
  }
}

const mapStateToProps = (state) => {
  const { teams_and_members_and_prs } = state.zoom1;
  return { teams_and_members_and_prs };
}

export default connect(mapStateToProps)(TeamsNMembersNPrs);
