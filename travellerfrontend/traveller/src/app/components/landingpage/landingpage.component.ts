/* import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {

  imageObject1: Array<object> = [
    {
      image: '../../../assets/slider/1.jpg',
      thumbImage: '../../../assets/slider/1.jpg',
      alt: 'SUMMER',
    },
    {
      image: '../../../assets/slider/Honeymoon-Packages-for-Goa.jpg',
      thumbImage: '../../../assets/slider/Honeymoon-Packages-for-Goa.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/reasons-to-visit-romania.jpg',
      thumbImage: '../../../assets/slider/reasons-to-visit-romania.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/Konark-Sun-Temple.jpg',
      thumbImage: '../../../assets/slider/Konark-Sun-Temple.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/historical-tajmahal.jpg',
      thumbImage: '../../../assets/slider/historical-tajmahal.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/FEATURE_FO_DOMINO_PARK_08_THE_LAWN_BARRETT_DOHERTY.jpg',
      thumbImage: '../../../assets/slider/FEATURE_FO_DOMINO_PARK_08_THE_LAWN_BARRETT_DOHERTY.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/island.jpg',
      thumbImage: '../../../assets/slider/island.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/Historical-Places-in-Central-India-that-You-Must-Visit.jpg',
      thumbImage: '../../../assets/slider/Historical-Places-in-Central-India-that-You-Must-Visit.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/Baga-Beach-in-goa.webp',
      thumbImage: '../../../assets/slider/Baga-Beach-in-goa.webp',
      alt: '',
    },
    {
      image: '../../../assets/slider/190410094953-india-waterfalls---athirappalli-waterfalls-full-169.jpg',
      thumbImage: '../../../assets/slider/190410094953-india-waterfalls---athirappalli-waterfalls-full-169.jpg',
      alt: '',
    }
  ];

  imageObject2: Array<object> = [
    {
      image: '../../../assets/slider/XSeJqH.jpg',
      thumbImage: '../../../assets/slider/XSeJqH.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/9ce283829510f3853492e725f094c694.jpg',
      thumbImage: '../../../assets/slider/9ce283829510f3853492e725f094c694.jpg',
      alt: '',
    },
    {
      image: '../../../assets/slider/indian-monsoon-and-its-impact.webp',
      thumbImage: '../../../assets/slider/indian-monsoon-and-its-impact.webp',
      alt: '',
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


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void { }


  yourfunctionName(subtype: string): any {
    this.router.navigate([{ outlets: { tripsOutlet: ['tripsallSearchBySubType', subtype] } }], { relativeTo: this.route });
  }


}
 */

import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {
  test: any[] = [
    [
      '../../../assets/slider/hills.jpg',
      '../../../assets/slider/historical.jpg',
      '../../../assets/slider/temple.jpg',
      '../../../assets/slider/parks.jpg',
      '../../../assets/slider/holiday.jpg',
     /*  '../../../assets/slider/island.jpg',
      '../../../assets/slider/ancient.jpg',
      '../../../assets/slider/seas.jpg',
      '../../../assets/slider/parks.jpg',
      '../../../assets/slider/water.jpg', */   ],
    [
      '../../../assets/slider/summer.jpg',
      '../../../assets/slider/winter.jpg',
      '../../../assets/slider/monsoon.jpg',
      '../../../assets/slider/yearly.jpg',
      '../../../assets/slider/reasons-to-visit-romania.jpg',
    ],
  ];

  images2: any[] = [
    [
      {
        value:
          '../../../assets/slider/hills.jpg',
        id: 0,
      },
      {
        value: '../../../assets/slider/historical.jpg',
        id: 1,
      },
      {
        value: '../../../assets/slider/temple.jpg',
        id: 2,
      },
      {
        value:
          '../../../assets/slider/parks.jpg',
        id: 3,
      },
      {
        value: '../../../assets/slider/holiday.jpg',
        id: 4,
      },
    /*   {
        value: '../../../assets/slider/ancient.jpg',
        id: 5,
      },
      {
        value: '../../../assets/slider/seas.jpg',
        id: 6,
      },
      {
        value: '../../../assets/slider/parks.jpg',
        id: 7,
      },
      {
        value: '../../../assets/slider/water.jpg',
        id: 8,
      }, */
    ],
    [
      {
        value: '../../../assets/slider/summer.jpg',
        id: 0,
      },
      {
        value: '../../../assets/slider/winter.jpg',
        id: 1,
      },
      {
        value: '../../../assets/slider/monsoon.jpg',
        id: 2,
      },
      {
        value: '../../../assets/slider/yearly.jpg',
        id: 3,
      },
      {
        value: '../../../assets/slider/summer.jpg',
        id: 4,
      },
    ],
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  yourfunctionName(subtype: String): any {
    this.router.navigate(
      [{ outlets: { tripsOutlet: ['tripsallSearchBySubType', subtype] } }],
      { relativeTo: this.route }
    );
  }

  next(id: any) {
    this.test[id] = [];
    console.log('time1');
    for (let i = 0; i < 5; i++) {
      let x = this.images2[id][i].id + 1;
      if (x < 5) {
        this.test[id].unshift(this.images2[id][x].value);
        this.images2[id][i].id = x;
      } else {
        let y = (x % 4) - 1;
        console.log(y);
        this.images2[id][i].id = y;
        this.test[id].unshift(this.images2[id][y].value);
      }
    }
  }

  previous(id: any) {
    this.test[id] = [];
    for (let i = 0; i < 5; i++) {
      let x = this.images2[id][i].id + 1;
      if (x < 5) {
        this.test[id].unshift(this.images2[id][x].value);
        this.images2[id][i].id = x;
      } else {
        let y = (x % 4) - 1;
        console.log(y);
        this.images2[id][i].id = y;
        this.test[id].unshift(this.images2[id][y].value);
      }
    }
  }

  onClickImage(): void {
    this.router.navigate(['trips']);
  }

}
