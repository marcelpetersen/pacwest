import { Component } from '@angular/core';
import { NavController, Platform, ViewController } from 'ionic-angular';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import * as $ from "jquery";
//import { Geolocation, Geoposition } from 'ionic-native';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
  Coordinates: any;
  watch:any;

  constructor(public navCtrl: NavController, public platform: Platform, public viewCtrl: ViewController) {

  }

  //ionViewDidEnter() {
    /*Initializing geolocation*/
    // let options = {
    //   frequency: 3000,
    //   enableHighAccuracy: true
    // };
    //
    // this.watch = Geolocation.watchPosition(options)
    // .subscribe((position: Geoposition) => {
    //   console.log(position);
    //   this.Coordinates = position.coords;
    //   this.executemap()
    // });
  //}

  ionViewDidEnter() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZ3lvdW5nYmUiLCJhIjoiY2o0NGsxYmIzMDNzbjJ3dWI0ZnBlcnAyZiJ9.1DXK1Zphc2hdw7gNwKDwtg';

      // Set Bounds
      // var sw = new mapboxgl.LngLat(-123.046875, 45.418849);
      // var ne = new mapboxgl.LngLat(-122.372589, 45.622201);

      var sw = new mapboxgl.LngLat(-122.71108626318916, 45.48014656958415);
      var ne = new mapboxgl.LngLat(-122.64920233679575, 45.55051403284517);
      var llb = new mapboxgl.LngLatBounds(sw, ne);

      var map = new mapboxgl.Map({
          style: 'mapbox://styles/gyoungbe/cj44onov79um42sk4vhph9sy1',
          //center: [this.Coordinates.longitude, this.Coordinates.latitude],
          center: [-122.6801443, 45.5153413],
          container: 'map',

          // Settings
          bearing: -90,
          maxBounds: llb,
          maxZoom: 18,
          minZoom: 14,
          pitch: 0,
          zoom: 16.5
      });

      // Add zoom and rotation controls
      map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      //var filterGroup = document.getElementById('filter-group');

      var filterGroup = document.getElementById('filter-group-list');
      map.on('load', function() {

          // Paint overrides

          // Layout overrides

          // Amenities
          map.setLayoutProperty('place_bar', 'visibility', 'visible');
          map.setLayoutProperty('place_coffee', 'visibility', 'visible');
          map.setLayoutProperty('place_government', 'visibility', 'visible');
          map.setLayoutProperty('place_grocery', 'visibility', 'visible');
          map.setLayoutProperty('place_lodging', 'visibility', 'visible');
          map.setLayoutProperty('place_museum', 'visibility', 'visible');
          map.setLayoutProperty('place_restaurant', 'visibility', 'visible');
          map.setLayoutProperty('place_shopping', 'visibility', 'visible');

          // Transit
          // MAX Lines
          map.setLayoutProperty('MAX_R', 'visibility', 'visible');
          map.setLayoutProperty('MAX_G', 'visibility', 'visible');
          map.setLayoutProperty('MAX_B', 'visibility', 'visible');
          map.setLayoutProperty('MAX_O', 'visibility', 'visible');
          map.setLayoutProperty('MAX_Y', 'visibility', 'visible');
          map.setLayoutProperty('MAX_Rgby', 'visibility', 'visible');
          map.setLayoutProperty('MAX_rGby', 'visibility', 'visible');
          map.setLayoutProperty('MAX_rgBy', 'visibility', 'visible');
          map.setLayoutProperty('MAX_rgbY', 'visibility', 'visible');
          map.setLayoutProperty('MAX_Go', 'visibility', 'visible');
          map.setLayoutProperty('MAX_gO', 'visibility', 'visible');
          map.setLayoutProperty('MAX_Rgb', 'visibility', 'visible');
          map.setLayoutProperty('MAX_rGb', 'visibility', 'visible');
          map.setLayoutProperty('MAX_rgB', 'visibility', 'visible');
          map.setLayoutProperty('MAX_Rb', 'visibility', 'visible');
          map.setLayoutProperty('MAX_rB', 'visibility', 'visible');
          map.setLayoutProperty('MAX_Gy', 'visibility', 'visible');
          map.setLayoutProperty('MAX_gY', 'visibility', 'visible');

          // Street Car Lines
          map.setLayoutProperty('SC_R', 'visibility', 'visible');
          map.setLayoutProperty('SC_G', 'visibility', 'visible');
          map.setLayoutProperty('SC_B', 'visibility', 'visible');
          map.setLayoutProperty('SC_Rgb', 'visibility', 'visible');
          map.setLayoutProperty('SC_rGb', 'visibility', 'visible');
          map.setLayoutProperty('SC_rgB', 'visibility', 'visible');
          map.setLayoutProperty('SC_Rg', 'visibility', 'visible');
          map.setLayoutProperty('SC_rG', 'visibility', 'visible');
          map.setLayoutProperty('SC_Rb', 'visibility', 'visible');
          map.setLayoutProperty('SC_rB', 'visibility', 'visible');
          map.setLayoutProperty('SC_Gb', 'visibility', 'visible');
          map.setLayoutProperty('SC_gB', 'visibility', 'visible');
          // Arial Tram
          map.setLayoutProperty('Aerial-Tram', 'visibility', 'visible');

          // Transit Labels & Symbols
          map.setLayoutProperty('portland-lightrail-labels', 'visibility', 'visible');
          map.setLayoutProperty('portland-tram-labels', 'visibility', 'visible');
          map.setLayoutProperty('portland-tram-labels-aerial', 'visibility', 'visible');

          // BIKETOWN
          map.setLayoutProperty('biketown-station', 'visibility', 'visible');

          // Pacwest Specific Labels
          map.setLayoutProperty('pacwest-label', 'visibility', 'visible');


          // OPTION ONE
          toggleLayer([
            'place_bar',
            'place_coffee',
            'place_government',
            'place_grocery',
            'place_lodging',
            'place_museum',
            'place_restaurant',
            'place_shopping'
            ],
            'Amenities');
          toggleLayer([
            'MAX_G',
            'MAX_O',
            'MAX_Y',
            'MAX_R',
            'MAX_B',
            'MAX_Rgby',
            'MAX_rGby',
            'MAX_rgBy',
            'MAX_rgbY',
            'MAX_Go',
            'MAX_gO',
            'MAX_Rgb',
            'MAX_rGb',
            'MAX_rgB',
            'MAX_Rb',
            'MAX_rB',
            'MAX_Gy',
            'MAX_gY',
            'SC_R',
            'SC_G',
            'SC_B',
            'SC_Rgb',
            'SC_rGb',
            'SC_rgB',
            'SC_Rg',
            'SC_rG',
            'SC_Rb',
            'SC_rB',
            'SC_Gb',
            'SC_gB',
            'Aerial-Tram',
            'portland-lightrail-labels',
            'portland-tram-labels',
            'portland-tram-labels-aerial'
          ], 'Transit');
          function toggleLayer(ids, name) {
            // Add Input to DOM
            var input = document.createElement('input');
            input.type = 'radio';
            input.name = toggleLayer.name;
            input.id = ids;
            input.className = 'mapToggle';
            input.checked = false;
            input.setAttribute('ng-click', 'map.flyTo({center: [-122.6801443,45.5153413],bearing: -90,pitch: 0,speed: 0.75,zoom: 15})');

            // console.log('Mapbox Layers Initiated:' + input.checked);
            filterGroup.appendChild(input);

            // Add Label to DOM
            var label = document.createElement('label');
            label.setAttribute('for', ids);
            label.textContent = name;
            filterGroup.appendChild(label);

            // Create Event Listener for change W/O using e.target.checked
            input.addEventListener('change', function(e){
              e.preventDefault();
              e.stopPropagation();
              for (let layers in ids) {
                if (input.checked === true) {
                    map.setLayoutProperty(ids[layers], 'visibility', 'visible')
                    console.log('Mapbox Layers Visible');
                }
                else {
                    map.setLayoutProperty(ids[layers], 'visibility', 'none')
                    console.log('Mapbox Layers Hidden');
                }
              }
            });
          };


          // Sort Input and Label within ul < li
          var $sort = $('ul#filter-group-list').children();
          for(var i=0, len = $sort.length; i < len; i+=2){
            // console.log(len); // Read Length of created items
            $sort.slice(i, i+2).wrapAll('<li>')
          };


          // Fly to map center
          var flyToCenter = document.getElementById('flyToCenter');
          flyToCenter.addEventListener('click', function () {
            map.flyTo({
                center: [
                  -122.6801443,
                  45.5153413
                ],
                bearing: -90,
                pitch: 0,
                speed: 0.75,
                zoom: 15
            });
          });

          function flyCenter() {
            map.flyTo({
                center: [
                  -122.6801443,
                  45.5153413
                ],
                bearing: -90,
                pitch: 0,
                speed: 0.75,
                zoom: 15
            });
          }



          map.addLayer({
            'id': 'pacwest',
            'type': 'fill',
            'source': {
                'type': 'geojson',
                'data': {
                  "type": "Feature",
                  "properties": {
                    "@id": "pacwest",
                    "landuse": "commercial",
                    "name": "PacWest Center"
                  },
                  "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                      [
                        [
                          -122.68047229820596,
                          45.515241539907244
                        ],
                        [
                          -122.68041641921454,
                          45.515226392262804
                        ],
                        [
                          -122.6804809235722,
                          45.515103921462526
                        ],
                        [
                          -122.68047943712784,
                          45.51509375135268
                        ],
                        [
                          -122.68047255247208,
                          45.515086891068165
                        ],
                        [
                          -122.67992358456114,
                          45.514941386137465
                        ],
                        [
                          -122.67988326982713,
                          45.51494541270944
                        ],
                        [
                          -122.67984222102864,
                          45.514959212544085
                        ],
                        [
                          -122.67979499207,
                          45.51504622352195
                        ],
                        [
                          -122.6798105266564,
                          45.515049389960495
                        ],
                        [
                          -122.6798232192071,
                          45.51505776875317
                        ],
                        [
                          -122.67982343246553,
                          45.515070776947255
                        ],
                        [
                          -122.67971007713965,
                          45.51528042774902
                        ],
                        [
                          -122.6797002860786,
                          45.515287323452185
                        ],
                        [
                          -122.67968731569796,
                          45.51529102847104
                        ],
                        [
                          -122.67967459086661,
                          45.51529005188536
                        ],
                        [
                          -122.67966333418728,
                          45.515285989014615
                        ],
                        [
                          -122.67960631416842,
                          45.51538979700695
                        ],
                        [
                          -122.67961070328069,
                          45.515403181427786
                        ],
                        [
                          -122.67962243847627,
                          45.51541282221629
                        ],
                        [
                          -122.67963655932758,
                          45.51541993692035
                        ],
                        [
                          -122.6798167311288,
                          45.515467157241545
                        ],
                        [
                          -122.67981284088938,
                          45.51549379798496
                        ],
                        [
                          -122.67981996977392,
                          45.515508505845446
                        ],
                        [
                          -122.67983454720847,
                          45.51552301523519
                        ],
                        [
                          -122.68022364084838,
                          45.51562789406354
                        ],
                        [
                          -122.68025233824659,
                          45.51562564081652
                        ],
                        [
                          -122.68027198389584,
                          45.515610702216094
                        ],
                        [
                          -122.68047229820596,
                          45.515241539907244
                        ]
                      ]
                    ]
                  }
                }
              },
              'layout': {
                //'visibility': 'visible'
              },
              'paint': {
                  'fill-color': '#f0c41e',
                  'fill-opacity': 1
              }
          },
          'water');
      });
 }

  ionViewDidLeave() {
    var filterGroup = document.getElementById('filter-group');
    while (filterGroup.hasChildNodes()) {
      filterGroup.removeChild(filterGroup.firstChild);
    }
  }

}
