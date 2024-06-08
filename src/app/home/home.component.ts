import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
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
            animate('500ms ease-out', style({ transform: 'translate(0, 0)', opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent {}
