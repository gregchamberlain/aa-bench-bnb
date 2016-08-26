import React, { Component } from 'react';
import MarkerManager from '../util/marker_manager';

class BenchMap extends Component {

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', e => {
      const b = this.map.getBounds();
      const ne = b.getNorthEast();
      const sw = b.getSouthWest();
      const bounds = {
        northEast: {lat: ne.lat(), lng: ne.lng()},
        southWest: {lat: sw.lat(), lng: sw.lng()}
      };
      this.props.updateBounds(bounds);
    });
    this.markerManager = new MarkerManager(this.map);
    this.markerManager.updateMarkers(this.props.benches);
  }

  componentWillReceiveProps(props) {
    this.markerManager.updateMarkers(props.benches);
  }

  render() {
    return (
      <div id="map-container" ref='map'></div>
    );
  }
}

export default BenchMap;
