import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    trigger('animateContact',[
      transition(':enter',[
        style({
          transform:'scale(0)',
          opacity:'0',
        }),
        animate('1000ms ease-out',style({
          transform:'scale(1)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class ContactComponent {
contacts = [
  {
    icon: 'bi-envelope',
    title: 'Email',
    value: 'keshavshriram2002@gmail.com',
    link: 'mailto:keshavshriram2002@gmail.com'
  },
  {
    icon: 'bi-geo-alt',
    title: 'Address',
    value: 'Flat no.502, SaiShanti Avenue, Sumukh Society, Narhe, Haveli, Pune, Maharashtra, India, Pin-411041'
  },
  {
    icon: 'bi-whatsapp',
    title: 'Whatsapp/Phone',
    value: '9665448430',
    link: 'https://wa.me/9665448430'
  }
];

}
