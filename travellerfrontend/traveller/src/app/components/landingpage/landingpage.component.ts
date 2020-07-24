import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {
constructor(){
}

  imageObject: Array<object> = [
    {
      image: '../../../assets/11.jpg', // Support base64 image
      thumbImage: '../../../assets/img/1 (1).jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/22.jpg',
      thumbImage: '../../../assets/img/2 (1).jpg',
      alt: '',
    },
    {
      image: '../../../assets/33.jpg', // Support base64 image
      thumbImage: '../../../assets/img/3.jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/44.jpg',
      thumbImage: '../../../assets/img/4.jpg',
      alt: '',
    },
    {
      image: '../../../assets/55.jpg', // Support base64 image
      thumbImage: '../../../assets/img/1 (4).jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/66.jpg', // Support base64 image
      thumbImage: '../../../assets/img/1 (5).jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/77.jpg', // Support base64 image
      thumbImage: '../../../assets/img/1 (6).jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/88.jpg', // Support base64 image
      thumbImage: '../../../assets/img/2 (5).jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/99.jpg', // Support base64 image
      thumbImage: '../../../assets/img/1 (2).jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    }
  ];
  sliderInfinite = true;
  sliderAutoSlide = true;
  sliderAnimationSpeed = 3;

  ngOnInit(): void { }

}
