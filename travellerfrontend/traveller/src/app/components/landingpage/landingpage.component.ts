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

  imageObject1: Array<object> = [
    {
      image: '../../../assets/slider/1.jpg', // Support base64 image
      thumbImage: '../../../assets/slider/1.jpg',
      alt: 'SUMMER', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/slider/Honeymoon-Packages-for-Goa.jpg',
      thumbImage: '../../../assets/slider/Honeymoon-Packages-for-Goa.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/reasons-to-visit-romania.jpg', // Support base64 image
      thumbImage: '../../../assets/slider/reasons-to-visit-romania.jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/slider/Konark-Sun-Temple.jpg',
      thumbImage: '../../../assets/slider/Konark-Sun-Temple.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/historical-tajmahal.jpg', // Support base64 image
      thumbImage: '../../../assets/slider/historical-tajmahal.jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/slider/FEATURE_FO_DOMINO_PARK_08_THE_LAWN_BARRETT_DOHERTY.jpg', // Support base64 image
      thumbImage: '../../../assets/slider/FEATURE_FO_DOMINO_PARK_08_THE_LAWN_BARRETT_DOHERTY.jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/slider/island.jpg', // Support base64 image
      thumbImage: '../../../assets/slider/island.jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/slider/Historical-Places-in-Central-India-that-You-Must-Visit.jpg', // Support base64 image
      thumbImage: '../../../assets/slider/Historical-Places-in-Central-India-that-You-Must-Visit.jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/slider/Baga-Beach-in-goa.webp', // Support base64 image
      thumbImage: '../../../assets/slider/Baga-Beach-in-goa.webp',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/slider/190410094953-india-waterfalls---athirappalli-waterfalls-full-169.jpg', // Support base64 image
      thumbImage: '../../../assets/slider/190410094953-india-waterfalls---athirappalli-waterfalls-full-169.jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    }
  ];

  imageObject2: Array<object> = [
    {
      image: '../../../assets/slider/XSeJqH.jpg', // Support base64 image
      thumbImage: '../../../assets/slider/XSeJqH.jpg',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/slider/9ce283829510f3853492e725f094c694.jpg',
      thumbImage: '../../../assets/slider/9ce283829510f3853492e725f094c694.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/indian-monsoon-and-its-impact.webp', // Support base64 image
      thumbImage: '../../../assets/slider/indian-monsoon-and-its-impact.webp',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/slider/msid-65105346,width-96,height-65.cms.webp',
      thumbImage: '../../../assets/slider/msid-65105346,width-96,height-65.cms.webp',
      alt: '',
    },
    {
      image: '../../../assets/slider/Sinhagad-Fort-during-monsoons-.webp',
      thumbImage: '../../../assets/slider/Sinhagad-Fort-during-monsoons-.webp',
      alt: '',
    }
  ];
  sliderInfinite = true;
  sliderAutoSlide = true;
  sliderAnimationSpeed = -5;

  ngOnInit(): void { }

}
