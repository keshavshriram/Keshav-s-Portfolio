import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [SlickCarouselModule, CommonModule]
})
export class ProjectsComponent {
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" style="height: 100%; width:3.5%; background:linear-gradient(to left, #242430,#10101f ); border-radius: 20px 0 0 20px;" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" style="height: 100%; width:3.5%;  background:linear-gradient(to right, #242430,#10101f ); border-radius: 0 20px 20px 0;" class="slick-next">Next</button>'
  };

  projects = [
    { title: 'E-Commerce', image: '/assets/ecommerce_img.PNG', githubLink: '#', liveLink: '#' },
    { title: 'Portfolio', image: '/assets/portfolio_img.PNG', githubLink: '#', liveLink: '#' },
    { title: 'Company CRM', image: '/assets/company-crm_img.PNG', githubLink: '#', liveLink: '#' },
    { title: 'E-Pass', image: '/assets/e-pass_img.PNG', githubLink: '#', liveLink: '#' },
    { title: 'Food Point', image: '/assets/burger_img.PNG', githubLink: '#', liveLink: '#' }
  ];
}
