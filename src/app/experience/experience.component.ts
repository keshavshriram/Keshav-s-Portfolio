import { animate, animation, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('internshipAnimation', [
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

  cerificates: string[] = ["Java Certificate", "Web Development", "Oracle-SQL", "Avishkar Project Competition", "Maharashtra State Certificate in IT  with 82%"];
}
