import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
//import { Geolocation, Geoposition } from 'ionic-native';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
  Coordinates: any;
  watch:any;

  constructor(public navCtrl: NavController, public platform: Platform) {

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


 //executemap(){
  ionViewDidEnter() {
    /*Initializing Map*/
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3lvdW5nYmUiLCJhIjoiY2o0NGsxYmIzMDNzbjJ3dWI0ZnBlcnAyZiJ9.1DXK1Zphc2hdw7gNwKDwtg';


    // Set Bounds
    var sw = new mapboxgl.LngLat(-123.046875, 45.418849);
    var ne = new mapboxgl.LngLat(-122.372589, 45.622201);
    var llb = new mapboxgl.LngLatBounds(sw, ne);

    var map = new mapboxgl.Map({
      //style: 'mapbox://styles/mapbox/dark-v9',
      style: 'mapbox://styles/gyoungbe/cj44onov79um42sk4vhph9sy1',
      //center: [this.Coordinates.longitude, this.Coordinates.latitude],
      center: [-122.6801443, 45.5153413],
      maxBounds: llb,
      zoom: 17,
      pitch: 0,
      minZoom: 14,
      maxZoom: 18,
      container: 'map'
    });
    map.on('load', function() {

      // map.loadImage('https://lh4.googleusercontent.com/mQZo7IFlAJg8OxrL49shcphJXGKavWZtaAOjPcVxVqvZwyMPTDpYcrh5tv5Nhzig4IVnOZqbs4xm9FA=w1280-h1288', (error, image) => {
      //   if (error) throw error;
      //   map.addImage('logo', image);
      //   map.addLayer({
      //       "id": "points",
      //       "type": "symbol",
      //       "source": {
      //           "type": "geojson",
      //           "data": {
      //               "type": "FeatureCollection",
      //               "features": [{
      //                   "type": "Feature",
      //                   "geometry": {
      //                       "type": "Point",
      //                       "coordinates": [-122.6801443, 45.5153413]
      //                   }
      //               }]
      //           }
      //       },
      //       "layout": {
      //           "icon-image": "logo",
      //           "icon-size": 0.1625,
      //           "icon-offset": [50, -10],
      //           "text-anchor": "center"
      //           // "icon-size": {
      //           //   'base': 0.125,
      //           //   'stops': [[14, 0.125], [18, 0.25]]
      //           // }
      //       }
      //   });
      // });

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
                "name": "PacWest Center",
                "wikidata": "Q7121859",
                "wikipedia": "en:PacWest Center"
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
      }, 'water');

  });




 }

}
