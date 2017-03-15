import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


class Map extends Component {
    static defaultProps = {
        center: { lat: 18.799787, lng: 99.023660 },
        zoom: 15
    };

    render() {
        return (
            <div style={{ width: '100%', height: '800px' }}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={18.799787}
                        lng={99.023660}
                        text={'P'}
                    />
                    <Marker
                        lat={18.7990674}
                        lng={99.023729}
                        text={'K'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;