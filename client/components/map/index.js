import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import firebase from '../../config.js'
import Marker from './marker';
import CircularProgress from 'material-ui/CircularProgress';


class Map extends Component {

    constructor(props) {
        super(props)
        this.state = {
            avatar: this.props.user.photoURL,
            center: { lat: null, lng: null },
            zoom: 15,
            loaded: false
        }
    }

    componentWillMount() {
        let self = this;
        const userId = firebase.auth().currentUser.uid;
        const geolocation = navigator.geolocation
        function getLocation() {
            return new Promise((resolve, reject) => {
                geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: false, maximumAge: 10000 })
            });
        }

       //setInterval(() => { 
            console.log('update location')
            getLocation()
            .then((data) => {
                console.log('store in firebase')
                firebase.database().ref(`profiles/${userId}`).set({
                    lat: data.coords.latitude,
                    lng: data.coords.longitude,
                    timestamp: data.timestamp
                });
            })
        //}, 5000)
        let profileLocationRef = firebase.database().ref(`profiles/${userId}`);
        profileLocationRef.on('value', function(snapshot) {
            let res = snapshot.val();
            self.setState({
                center: {
                    avatar: res.avatar,
                    lat: res.lat,
                    lng: res.lng
                },
                loaded: true
            })
        });
    }

    render() {
        return (
            <div style={{ width: '100%', height: '800px' }}>
                {
                    this.state.loaded ? (
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyBvteWWaHrM4U45kOLaRxWZSlT7jsXNu1A', }}
                            defaultCenter={this.state.center}
                            defaultZoom={this.state.zoom}
                        >
                            <Marker
                                lat={this.state.center.lat}
                                lng={this.state.center.lng}
                                images={this.props.user.photoURL}
                            />
                        </GoogleMapReact>
                    ):( 
                        <CircularProgress size={200} thickness={10} />
                    )
                }
            </div>
        );
    }
}

export default Map;