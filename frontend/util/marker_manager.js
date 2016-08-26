export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {
    this._benchesToAdd(benches).forEach(bench => this._createMarkerFromBench(bench));
    this._markersToRemove(benches).forEach(marker => this._removeMarker(marker));
  }

  _benchesToAdd(benches) {
    return benches.filter(bench => {
      for (var i = 0; i < this.markers.length; i++) {
        if (this._equal(bench, this.markers[i])) return false;
      }
      return true;
    });
  }

  _markersToRemove(benches) {
    return this.markers.filter(marker => {
      for (var i = 0; i < benches.length; i++) {
        if (this._equal(benches[i], marker)) return false;
      }
      return true;
    });
  }

  _equal(bench, marker) {
    return bench.description === marker.title;
  }

  _removeMarker(marker) {
    console.log('bench removes....');
    marker.setMap(null);
    const idx = this.markers.indexOf(marker);
    if (idx !== -1) {
      this.markers.splice(idx, 1);
    }
  }

  _createMarkerFromBench(bench) {
    const marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.description
    });
    this.markers.push(marker);
    console.log('adding bench...');
  }
}
