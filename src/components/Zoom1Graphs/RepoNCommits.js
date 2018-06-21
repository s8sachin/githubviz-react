import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint} from 'react-vis';
import {repoAndCommitsAction} from '../../actions/AllGraphAction';
import { connect } from 'react-redux';

class RepoNCommits extends Component {
  render(){
    // state = {
    //   value: false
    // }
    return (
      <XYPlot height={300} width={1280} color="orange" stroke="black" xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        {console.log(this.props.repoNCommits)}
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={this.props.repoNCommits}
          onValueMouseOver={v => this.setState({ value: v })}
          onSeriesMouseOut={v => this.setState({ value: false })} />
        {/* {value && <Hint value={this.state.value} />} */}
      </XYPlot>
    )
  }
}

const mapStateToProps = (state) => {
  const { repoNCommits } = state.repoNCommits;
  return { repoNCommits };
}

// export default RepoNCommits;
export default connect(mapStateToProps, { repoAndCommitsAction }) (RepoNCommits);
