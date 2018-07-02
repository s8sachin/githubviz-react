// import React, { Component } from 'react';
// import Header from './commons/Header';
// import { Grid,Row,Col} from 'react-bootstrap';
// import { RadialChart,Hint,XYPlot,ArcSeries} from 'react-vis';
// class  Piecharts extends Component {
//   render () {
//     return (
//       <div>
//         <Header/>
//         <Radialcharts/>
//         <ClockExample/>
//       </div>
//     )
//   }
// }
// class Radialcharts extends Component {
//   state = {
//     value: false
//   }
//   render () {
//     const { value } = this.state;
//     return (
//       <div>
//         <Grid>
//         <h1 className="head-custom">Pie chart</h1>
//           <Row className="show-grid">
//             <Col xs={12} md={6}>
//               <RadialChart stroke="black"
//                innerRadius={100}
//                 radius={200}
//                 getAngle={d => d.theta}
//                 data={[
//                   { theta: 2, label: 'Repo1'},
//                   { theta: 6,label: 'Repo2' },
//                   { theta: 2, label: 'Repo3' },
//                   { theta: 3 , label: 'Repo4'},
//                   { theta: 11, label: 'Repo5' },
//                   { theta: 10 , label: 'Repo6'}
//                 ]}
//                 showLabels
//                 onValueMouseOver={v => this.setState({ value: v })}
//                 onSeriesMouseOut={v => this.setState({ value: false })}
//                 width={500}
//                 height={500}>
//                 {value && <Hint value={value} />}
//               </RadialChart>
//             </Col>
//             <Col xs={12} md={6}>
//               <RadialChart stroke="black"
//                 radius={200}
//                 getAngle={d => d.theta}
//                 data={[
//                   { theta: 2, label: 'Repo1'},
//                   { theta: 6,label: 'Repo2' },
//                   { theta: 2, label: 'Repo3' },
//                   { theta: 3 , label: 'Repo4'},
//                   { theta: 11, label: 'Repo5' },
//                   { theta: 10 , label: 'Repo6'}
//                 ]}
//                 showLabels
//                 onValueMouseOver={v => this.setState({ value: v })}
//                 onSeriesMouseOut={v => this.setState({ value: false })}
//                 width={500}
//                 height={500}>
//                 {value && <Hint value={value} />}
//               </RadialChart>
//             </Col>
//           </Row>
         
//           <Row className="show-grid">
//           <p>A pie graph (or pie chart) is a specialized graph used in statistics. </p>
//           <p>The independent variable is plotted around a circle in either a clockwise direction or a counterclockwise direction.</p>
//           </Row>
//         </Grid>
//       </div>
//       )
//     }
//   }
// const PI = Math.PI;
// function getSeconds() {
//   return Math.floor((new Date()).getTime() / 1000);
// }
//  class ClockExample extends Component {
//   state = {
//    time: 0
//   }

//   componentDidMount() {
//     this._timerId = setInterval(() => this.setState({time: getSeconds()}), 100);
//   }

//   componentWillUnmount() {
//     clearInterval(this._timerId);
//     this.setState({timerId: false});
//   }

//   render() {
//     const {time} = this.state;
//     const seconds = time % 60;
//     const minutes = (time / 60) % 60;
//     const hours = (time / (60 * 24)) % 24;
//     return (
//       <XYPlot
//         xDomain={[-3, 3]}
//         yDomain={[-3, 3]}
//         width={300}
//         getAngle={d => d.time}
//         getAngle0={d => 0}
//         height={300}>
//         <ArcSeries
//           animation={{
//             damping: 9,
//             stiffness: 300
//           }}
//           radiusDomain={[0, 3]}
//           data={[
//             {time: seconds / 60 * 2 * PI, radius0: 1, radius: 1.5, color: 0},
//             {time: minutes / 60 * 2 * PI, radius0: 1.6, radius: 2.1, color: 1},
//             {time: hours / 24 * 2 * PI, radius0: 2.2, radius: 2.7, color: 2}
//           ]}/>
//       </XYPlot>
//     );
//   }
// }
// export default  Piecharts;


import React, { Component } from 'react';
import { Grid,Row,Col,Table} from 'react-bootstrap';



class Piecharts extends Component {
  render() {
    return (
    //   <Grid>
    //         <Row className="show-grid">
    //         <table id="simple-board">
    //   <tbody>
             
      
    //     <tr>
    //     <th Col xs={12} md={4}>kljfk</th>
    //     <Col xs={12} md={4}>
    //     <th>kljfk</th></Col>
       
    //     </tr>
        
    //   </tbody>
    // </table>
    // </Row>
    // </Grid>
    <Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    );
  }
}

export default Piecharts;