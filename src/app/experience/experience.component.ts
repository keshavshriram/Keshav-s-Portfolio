import { animate, animation, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('experinceAnimation', [
      transition(':enter', [
        style({
          transform: 'translateX(-40%)',
          opacity: 0,
        }),
        animate('500ms ease-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ])
    ]),
    trigger('internshipAnimation', [
      transition(':enter', [
        style({
          transform: 'translateY(200%)',
          opacity: 0,
        }),
        animate('800ms ease-out', style({
          transform: 'translateY(0)',
          opacity: 1,
        }))
      ])
    ]),
    trigger('certificateAnimation',[
      transition(':enter',[
        style({
          transform:'translateX(11%)',
          opacity:0,
        }),
        animate('500ms ease-out',style({
          transform:'translateX(0)',
          opacity:'1',
        }))
      ])
    ])
  ]
})
export class ExperienceComponent {

  cerificates: string[] = ["Dot Net Core","Java", "Oracle-SQL", "Web Development", "Avishkar Project Competition"];
}
