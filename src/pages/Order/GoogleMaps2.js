import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../../Store/ActionOrderPage";
import { withRouter, Link, Redirect } from "react-router-dom";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: {
        position: {
          lat: -7.9666204,
          lng: 112.6326321
        },
        key: Date.now(),
        defaultAnimation: 2
      },
      mapCenter: { lat: -7.9666204, lng: 112.6326321 },
      // access_token: 'AIzaSyAtJjcjFBzjxF908drCFRGAXBF-EvefsSo',
      // address: '',
      mapRef: null,
      lat: -7.9666204,
      lng: 112.6326321
    };
  }

  render() {
    const GoogleMapWrapper = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={15}
        defaultCenter={props.center}
        onClick={props.onMapClick}
        onDragEnd={props.onDragEnd}
        className="map"
      >
        <Marker {...props.markers} />
      </GoogleMap>
    ));

    return (
      <div className="row-100">
        <br />
        <GoogleMapWrapper
          containerElement={<div style={{ height: `260px` }} />}
          mapElement={<div style={{ height: `260px` }} />}
          onMapClick={this.props.handleMapClick}
          onDragEnd={this.props.handleMapDrag}
          onMapLoad={this.props.handleMapLoad}
          markers={this.props.markers}
          center={this.props.center}
        />
      </div>
    );
  }
}

export default MapPage;
