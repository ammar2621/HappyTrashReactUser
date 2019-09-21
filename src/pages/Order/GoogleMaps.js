import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// Component that will render maps interactively with user click
const MapPage = (props) => {

    const GoogleMapWrapper = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={15}
        defaultCenter={props.center}
        onClick={props.onMapClick}
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
          onMapClick={props.handleMapClick}
          onDragEnd={props.handleMapDrag}
          onMapLoad={props.handleMapLoad}
          markers={props.markers}
          center={props.center}
        />
      </div>
    );
}

export default MapPage;
