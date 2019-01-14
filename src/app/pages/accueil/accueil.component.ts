import { Component, OnInit } from '@angular/core';
import { IImage } from '../../slideshow/IImage';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
    { url: '../../../assets/img/touba2.jpeg', clickAction: () => alert('custom click function') },
    { url: '../../../assets/img/touba3.jpeg', caption: 'Apple TV'},
    { url: '../../../assets/img/touba4.jpeg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];
  height = '800px';
  minHeight: string;
  arrowSize = '30px';
  showArrows = true;
  disableSwiping = false;
  autoPlay = true;
  autoPlayInterval = 5000;
  stopAutoPlayOnSlide = true;
  debug = false;
  backgroundSize = 'cover';
  backgroundPosition = 'center center';
  backgroundRepeat = 'no-repeat';
  showDots = true;
  dotColor = '#FFF';
  showCaptions = true;
  captionColor = '#FFF';
  captionBackground = 'rgba(0, 0, 0, .35)';
  lazyLoad = false;
  hideOnNoSlides = false;
  width = '100%';
  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
      console.log('adding an image url dynamically.');
      this.imageUrls.push('../../../assets/img/touba1.jpeg');
    // }, 2000);
  }



}
