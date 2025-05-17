import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private readonly router : Router)
  {

  }
  menuOptions: { module: string, route: string }[] = [{
    module: 'Home',
    route: ''
  },
  {
    module: 'About Me',
    route: 'app-about-me'
  },
  {
    module: 'Skills',
    route: 'app-skills'
  },
  {
    module: 'Projects',
    route: 'app-projects'
  },
  {
    module: 'Internship & Certificates',
    route: 'app-experience'
  },
  {
    module: 'Contact',
    route: 'app-contact'
  }
  ];

  selectMenuItem(item : {module: string , route ?: string})
  {
    this.router.navigate([item.route]);
  }
}
