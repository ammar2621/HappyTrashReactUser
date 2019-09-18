import React, {Component} from 'react';
// import GoogleAddressAutocomplete from './googleaddressautocomplete.js';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import axios from 'axios';
// import NavWrapper from './navwrapper.js';

class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: {
                position: {
                    lat: -7.9666204,
                    lng: 112.6326321,
                },
                key: Date.now(),
                defaultAnimation: 2,
            },
            mapCenter: { lat: -7.9666204, lng: 112.6326321 },
            access_token: '',
            address: '',
            mapRef: null,
            lat: null,
            lng: null,
        }
    }

    componentWillMount() {
        
    }

    handleMapClick = this.handleMapClick.bind(this);
    handleMapDrag = this.handleMapDrag.bind(this);
    handleMapLoad = this.handleMapLoad.bind(this);

    handleMapClick(event) {
        let that = this;
        let mapRef = this._mapComponent;
        console.log(mapRef.getCenter().lat()+'; '+mapRef.getCenter().lng());
        this.setState({
            markers: {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now()
            },
            mapCenter: event.latLng,
            lat: mapRef.getCenter().lat(),
            lng: mapRef.getCenter().lng()
        });
        console.log(this.state.lat)
        console.log(this.state.lng)

    }

    // handleAddressChange(latLngObject, address) {
    //     console.log('addr: => '+address);
    // }

    handleMapDrag() {
        let mapRef = this._mapComponent;
        console.log(mapRef.getCenter().lat()+'; '+mapRef.getCenter().lng());
        console.log(this.state.markers.position)
    }

    handleMapLoad(map) {
        this._mapComponent = map;
    }

    render() {
        const GoogleMapWrapper = withGoogleMap(props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={19}
                defaultCenter={props.center}
                onClick={props.onMapClick}
                onDragEnd={props.onDragEnd}
            >
                <Marker {...props.markers} />
            </GoogleMap>
        ));

        return (
            <div className="row-100">
                {/* <NavWrapper/> */}
                {/* <GoogleAddressAutocomplete addressChange={this.handleAddressChange.bind(this)} address={this.state.address}/> */}
                <br />
                <GoogleMapWrapper
                    containerElement={
                        <div style={{ height: `100vh` }} />
                    }
                    mapElement={
                        <div style={{ height: `100vh` }} />
                    }
                    onMapClick={this.handleMapClick}
                    onDragEnd={this.handleMapDrag}
                    onMapLoad={this.handleMapLoad}
                    markers={this.state.markers}
                    center={this.state.mapCenter}
                />
            </div>
        )
    }
}

export default MapPage;