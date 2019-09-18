import React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import './order.css'

export class MapContainer extends React.Component {
    state = { userLocation: { lat: -7.966486300000001, lng: 112.6103729 }, loading: true };
  
    componentDidMount(props) {
      navigator.geolocation.getCurrentPosition(
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

      
    }
  
    render() {
      const { loading, userLocation } = this.state;
      const { google } = this.props;
  
      if (loading) {
        return null;
      }
  
      return (
          <Map google={google} initialCenter={userLocation} zoom={19} width="100px" height="100px" className="map"/>

        );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: "AIzaSyAtJjcjFBzjxF908drCFRGAXBF-EvefsSo"
  })(MapContainer);