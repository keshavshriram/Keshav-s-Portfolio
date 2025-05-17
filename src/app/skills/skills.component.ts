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

 
  skills = [
    { name: 'Angular', logo: 'angular_logo1.png' },
    { name: '.Net Core', logo: 'DotNetImage.png' },
    { name: 'HTML 5', logo: 'html5_logo3.png' },
    { name: 'CSS 3', logo: 'css_logo1.png' },
    { name: 'Tailwind', logo: 'tailwind.png' },
    { name: 'Bootstrap', logo: 'bootstrap_logo1.png' },
    { name: 'JavaScript', logo: 'javascript_logo1.png' },
    { name: 'Java', logo: 'java_logo2.png' },
    { name: 'Oracle-SQL', logo: 'oraclesql_logo1.png' }
  ];

  // In your component.ts file
hardSkills = [
  {
    icon: 'assets/creativity_logo2.png',
    name: 'Creativity'
  },
  {
    icon: 'assets/resolving_problem3.png',
    name: 'Problem Solving'
  },
  {
    icon: 'assets/adaptibility_logo1.png',
    name: 'Adaptability'
  }
];
  
  highlightedSkill: string = '';
  
  highlightSkill(skillName: string, isHighlighted: boolean) {
    this.highlightedSkill = isHighlighted ? skillName : '';
  }
}
