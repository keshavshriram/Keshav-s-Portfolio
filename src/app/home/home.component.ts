import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('IconsAnimation', [
      transition(':enter', [
        // Initially, set the position to be outside the screen (left top corner) and opacity to 0
        query('li', [
          style({ transform: 'translate(-20px, -70px)', opacity: 0 }),
          stagger(200, [
            // Animate to the normal position and opacity 1
            animate('200ms ease-out', style({ transform: 'translate(0, 0)', opacity: 1 }))
          ])
        ])
      ])
    ]),

    trigger('emailAnimation', [
      state('void', style({
        transform: 'translateX(-75px) translateY(50px)',
        opacity: 0,
      })),
      state('*', style({
        transform: 'translateX(0) translateY(0)',
        opacity: 1,
      })),
      transition('void => *', [
        animate('1000ms ease-out')
      ]),
      
    ]),

    trigger('whatsappAnimation', [
      state('void', style({
        transform: 'translateX(75px) translateY(50px)',
        opacity: 0,
      })),
      state('*', style({
        transform: 'translateX(0) translateY(0)',
        opacity: 1,
      })),
      transition('void => *', [
        animate('1000ms ease-out')
      ]),
      
    ]),

    trigger('nameAnimation',[
      state('void',style({
        transform:'translateX(-100px)',
        opacity:0,
      })),
      state('*',style({
        transform :'translateX(0)',
        opacity:1,
      })),
      transition('void=>*',[animate('400ms ease-out')]),
    ]),
  ]
})
export class HomeComponent {}
