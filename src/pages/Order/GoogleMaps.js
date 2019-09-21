import React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import "./order.css";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: { lat: -7.966486300000001, lng: 112.6103729 },
      loading: true
    };
  }
  // state = { userLocation: { lat: -7.966486300000001, lng: 112.6103729 }, loading: true };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      const curr = this.state.currentLocation;
      const google = this.props.google;
      const maps = google.maps;
      const center = new maps.LatLng(curr.lat, curr.lng);
      this.setState({ userLocation: center });
    }
  }

  componentDidMount = async props => {
    await navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  };

  render() {
    // const { loading, userLocation } = this.state;
    // const { google } = this.props;

    if (this.state.loading) {
      return null;
    }

    return (
      <div>
        <Map
          google={window.google}
          initialCenter={this.state.userLocation}
          zoom={19}
          width="100px"
          height="100px"
          className="map"
        >
          <Marker
            // title={'The marker`s title will appear as a tooltip.'}
            // name={'SOMA'}
            position={this.state.userLocation}
          />
          <Marker />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAtJjcjFBzjxF908drCFRGAXBF-EvefsSo"
})(MapContainer);
