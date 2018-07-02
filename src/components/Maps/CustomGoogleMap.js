import React, { Component } from 'react';
import Header from '../commons/Header';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import { compose, withProps, withStateHandlers } from "recompose";
const demoFancyMapStyles = require("./MapStyles.json");
/* global google */
var lineSymbol = {
  path: 'M 0,-1 0,1',
  strokeOpacity: 1,
  scale: 4
}
const markerLocations = [{lat: 21, lng:55}, {lat: 12, lng: 76}, {lat: 15, lng: 100}, {lat: 31, lng:121}]
const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAgz7WIqeyebRjMS1ngHxrwCGY1wLEMIvI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `550px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 12.2958, lng: 76.6394 },
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
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

class CustomGoogleMap extends Component {
  state = {
    isMarkerShown: false,
  }

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

  render() {
    return (
      <div>
        <Header/>
        <StyledMapWithAnInfoBox />
      </div>
    )
  }
}

export default CustomGoogleMap;