import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations :[
    
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
