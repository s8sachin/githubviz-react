import React, { Component } from 'react';
import Header from '../commons/Header';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import { compose, withProps, withStateHandlers } from "recompose";
import { Grid, Col, Row, Button, Glyphicon } from 'react-bootstrap';
import circleGreen from '../../icons/circleGreen.svg';
import circleYellow from '../../icons/circleYellow.svg';
import circleRed from '../../icons/circleRed.svg';
const demoFancyMapStyles = require("./MapStyles.json");
/* global google */
var lineSymbol = {
  path: 'M 0,-1 0,1',
  strokeOpacity: 1,
  scale: 3
}

const markerLocations = [{lat: 21, lng:55, icon: circleGreen}, {lat: 12, lng: 76, icon: circleYellow}, {lat: 15, lng: 100, icon: circleRed}, {lat: 31, lng:121, icon: circleRed}]

class CustomGoogleMap extends Component {
  state = {
    isMarkerShown: false,
    mapHeight: '220px'
  }

  StyledMapWithAnInfoBox = compose(
    // withProps({
    //   googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAgz7WIqeyebRjMS1ngHxrwCGY1wLEMIvI&v=3.exp&libraries=geometry,drawing,places",
    //   loadingElement: <div style={{ height: `100%` }} />,
    //   containerElement: <div style={{ height: this.state.mapHeight }} />,
    //   mapElement: <div style={{ height: '100%' }} />,
    //   center: { lat: 12.2958, lng: 76.6394 },
    // }),
    // withStateHandlers(() => ({
    //   isOpen: false,
    //   mapHeight: '220px'
    // }), {
    //   onToggleOpen: ({ isOpen }) => () => ({
    //     isOpen: !isOpen
    //   })
    // }, {
    //   onClickExpand: ({ mapHeight }) => () => (console.log(mapHeight))
    // }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={4}
      defaultCenter={props.center}
      defaultOptions={{ styles: demoFancyMapStyles }}
    >
      {/* <InfoBox
        defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Hello, Taipei!
          </div>
        </div>
      </InfoBox> */}
      <Polyline 
        path={markerLocations} 
        geodesic={true} 
        options={{ 
          strokeColor: 'white',
          strokeOpacity: 0,
          strokeWeight: 2,
          icons: [{ 
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
        }}
      /> 
      {markerLocations.map((location, index) => {
        return(
          <Marker
            key={index}
            position={location}
            onClick={props.onToggleOpen}
            icon={{url: location.icon, scaledSize: new google.maps.Size(15, 15)}}
          >
            {props.isOpen && <InfoBox
              onCloseClick={props.onToggleOpen}
              options={{ closeBoxURL: ``, enableEventPropagation: true }}
            >
              <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                  Hello, Kaohsiung!
                </div>
              </div>
            </InfoBox>}
          </Marker>
        )
      })}
    </GoogleMap>
  );

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  changeMapHeight () {
    var mapHeight = this.state.mapHeight === '450px' ? '200px' : '450px';
    this.setState({mapHeight: mapHeight})
  }

  render() {
    return (
      <div>
        <Header/>
        <Grid bsClass='container-fluid'>
        <Button className='pull-right' onClick={() => this.changeMapHeight()}><Glyphicon glyph="resize-full"/></Button><br/><br/>
        <this.StyledMapWithAnInfoBox
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgz7WIqeyebRjMS1ngHxrwCGY1wLEMIvI&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: this.state.mapHeight }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={{ lat: 15.2958, lng: 80.6394 }}
        />
        </Grid>
      </div>
    )
  }
}

export default CustomGoogleMap;