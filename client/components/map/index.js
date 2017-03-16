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