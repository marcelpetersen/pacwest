import { Component }      from '@angular/core';
import { NavController }  from 'ionic-angular';

//import { jQuery }         from 'jquery/dist/jquery.min.js';
import * as $ from "jquery";
import "lightgallery";
// import { lgFullscreen }   from 'lg-fullscreen/dist/lg-fullscreen.min.js';
// import { lgThumbnail }    from 'lg-thumbnail/dist/lg-thumbnail.min.js';
// import { lgZoom }         from 'lg-zoom/dist/lg-zoom.min.js';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  // galleryImages: any[];
  selectedGallery: string;

  galleryExterior: any[];
  galleryInterior: any[];
  galleryRendering: any[];

  constructor(public navCtrl: NavController) {
    this.galleryExterior = [
        {
          image: 'assets/img/exterior/exterior-01.jpg'
        },
        {
          image: 'assets/img/exterior/exterior-02.jpg'
        },
        {
          image: 'assets/img/exterior/exterior-03.jpg'
        },
        {
          image: 'assets/img/exterior/exterior-04.jpg'
        },
        {
          image: 'assets/img/exterior/exterior-05.jpg'
        },
        {
          image: 'assets/img/exterior/exterior-06.jpg'
        },
        {
          image: 'assets/img/exterior/exterior-07.jpg'
        },
        {
          image: 'assets/img/exterior/exterior-08.jpg'
        }
    ]
    this.galleryInterior = [
        {
          image: 'assets/img/interior/interior-01.jpg'
        },
        {
          image: 'assets/img/interior/interior-02.jpg'
        },
        {
          image: 'assets/img/interior/interior-03.jpg'
        },
        {
          image: 'assets/img/interior/interior-04.jpg'
        },
        {
          image: 'assets/img/interior/interior-05.jpg'
        },
        {
          image: 'assets/img/interior/interior-06.jpg'
        },
        {
          image: 'assets/img/interior/interior-07.jpg'
        },
        {
          image: 'assets/img/interior/interior-08.jpg'
        }
    ]
    this.galleryRendering = [
        {
          image: 'assets/img/rendering/rendering-01.jpg'
        },
        {
          image: 'assets/img/rendering/rendering-02.jpg'
        },
        {
          image: 'assets/img/rendering/rendering-03.jpg'
        },
        {
          image: 'assets/img/rendering/rendering-04.jpg'
        },
        {
          image: 'assets/img/rendering/rendering-05.jpg'
        },
        {
          image: 'assets/img/rendering/rendering-06.jpg'
        },
        {
          image: 'assets/img/rendering/rendering-07.jpg'
        },
        {
          image: 'assets/img/rendering/rendering-08.jpg'
        }
    ]

    this.selectedGallery = 'exterior';


  }



  ionViewDidLoad() {

    $(".lightGallery-1").lightGallery({
      thumbnail:true,
      selector: 'img'
    });
    $(".lightGallery-2").lightGallery({
      thumbnail: true,
      selector: 'img'
    });
  }

}
