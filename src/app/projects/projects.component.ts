import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" style="height: 100%; width:3.5%; background:linear-gradient(to left, #242430,#10101f ); border-radius: 20px 0 0 20px;" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" style="height: 100%; width:3.5%;  background:linear-gradient(to right, #242430,#10101f ); border-radius: 0 20px 20px 0;" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile
          dots: true
        }
      }
    ]
  };

  projects = [
    { title: 'E-Commerce', image: '/assets/ecommerce_img.PNG', githubLink: 'https://github.com/keshavshriram/E-Commerce', liveLink: 'https://e-commerce-3ff07.web.app/' },
    { title: 'Portfolio', image: '/assets/portfolio_img.PNG', githubLink: 'https://github.com/keshavshriram/Keshav-s-Portfolio', liveLink: '#' },
    { title: 'Company CRM', image: '/assets/company-crm_img.PNG', githubLink: 'https://github.com/keshavshriram/Company-CRM', liveLink: 'https://keshavshriram.github.io/Company-CRM/' },
    { title: 'E-Pass', image: '/assets/e-pass_img.PNG', githubLink: 'https://github.com/keshavshriram/E-pass', liveLink: 'https://github.com/keshavshriram/E-pass' },
    { title: 'Food Point', image: '/assets/burger_img.PNG', githubLink: 'https://github.com/keshavshriram/Burger-Pizza-Site-project', liveLink: 'https://keshavshriram.github.io/Burger-Pizza-Site-project/' }
  ];
}
