import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import firebase from '../../config.js';
import _ from 'underscore';
import Marker from './marker';
import CircularProgress from 'material-ui/CircularProgress';


class Map extends Component {

    constructor(props) {
        super(props)
        this.state = {
            uid: firebase.auth().currentUser.uid,
            avatar: this.props.user.photoURL,
            center: { lat: null, lng: null },
            zoom: 20,
            loaded: false,
            markerList: null
        }
    }

    componentWillMount() {
        let self = this;
        const userId = this.state.uid;
        const geolocation = navigator.geolocation
        function getLocation() {
            return new Promise((resolve, reject) => {
                geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: false, maximumAge: 10000 })
            });
        }

       setInterval(() => { 
            console.log('update location')
            getLocation()
            .then((data) => {
                console.log('store in firebase')
                firebase.database().ref(`profiles/${userId}`).set({
                    avatar: self.props.user.photoURL,
                    lat: data.coords.latitude,
                    lng: data.coords.longitude,
                    timestamp: data.timestamp
                });
            })
        }, 5000)

        let profileLocation = firebase.database().ref(`profiles/${userId}`);
        profileLocation.on('value', function(snapshot) {
            let res = snapshot.val();
            self.setState({
                avatar: res.avatar,
                center: {
                    lat: res.lat,
                    lng: res.lng
                }
            })
        });

        let allLocation = firebase.database().ref(`profiles`);
        allLocation.on('value', function(snapshot) {

            let markerList = _.map(snapshot.val(), (data, key) => {
                data.uid = key;
                return data;
            });
            self.setState({
                loaded: true,
                markerList: markerList
            });
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
                        { this.state.markerList.map((marker) => {
                             return (<Marker 
                                key={marker.uid}
                                uid={marker.uid}
                                ownUid={marker.uid}
                                lat={marker.lat}
                                lng={marker.lng}
                                images={marker.avatar}
                            />)
                        })
                        }
                       

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