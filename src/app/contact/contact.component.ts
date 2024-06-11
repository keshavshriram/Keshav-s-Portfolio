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

}
