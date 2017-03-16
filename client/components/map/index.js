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
                    bootstrapURLKeys={{ key: 'AIzaSyBvteWWaHrM4U45kOLaRxWZSlT7jsXNu1A', }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={18.799787}
                        lng={99.023660}
                        text={`AM HERE`}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;