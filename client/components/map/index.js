import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import firebase from '../../config.js'
import Marker from './marker';


class Map extends Component {
    static defaultProps = {
        center: { lat: 18.799787, lng: 99.023660 },
        zoom: 15
    };

    constructor(props) {
        super(props)
        this.state = {
            center: { lat: null, lng: null },
            zoom: 15
        }
    }

    componentWillMount() {
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
    }

    render() {
        return (
            <div style={{ width: '100%', height: '800px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBvteWWaHrM4U45kOLaRxWZSlT7jsXNu1A', }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={18.799787}
                        lng={99.023660}
                        images={'https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png'}
                    />
                    <Marker
                        lat={18.8}
                        lng={99.03}
                        images={'http://www.vnfestivaltour.com.vn/images/blog/avata.png'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;