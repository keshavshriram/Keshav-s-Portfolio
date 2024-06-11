import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations :[
    trigger('softSkillsAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100px)', opacity: 0 }),
        animate('500ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),

    trigger('hardSkillsAnimation',[
      transition(':enter',[
        style({
          transform:'scale(0)'
        }),
        animate(500,style({
          transform:'scale(1)'
        }))
      ])
    ])

  ]
})
export class SkillsComponent {

 
  makeFalse(element :HTMLParagraphElement):void
  {
    element.style.opacity = '0';

    element.style.transition ='200ms';
  }

  makeTrue(element : HTMLParagraphElement):void
  {
    element.style.opacity='1';
    element.style.transition='1000ms ease-in-out'
    
  }
}
