import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint} from 'react-vis';
import { connect } from 'react-redux';

class RepoNCommits extends Component {
  constructor () {
    super();
  }
  componentWillMount () {
    this.setState({mouseOverValue: false})
  }
  render(){
    return (
      <XYPlot height={300} width={1280} color="orange" stroke="black" xType="ordinal">
        {/* <VerticalGridLines /> */}
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45}/>
        <YAxis />
        <VerticalBarSeries data={this.props.repos_and_commits}
          onValueMouseOver={v => this.setState({ mouseOverValue: v })}
          onSeriesMouseOut={v => this.setState({ mouseOverValue: false })} />
        {this.state.mouseOverValue && <Hint value={this.state.mouseOverValue} />}
      </XYPlot>
    )
  }
}

const mapStateToProps = (state) => {
  const { repos_and_commits } = state.zoom1;
  return { repos_and_commits };
}

export default connect(mapStateToProps) (RepoNCommits);
