import { animate, state, style, transition, trigger ,keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
      trigger('AboutMeAanimation', [
        state('void', style({
          transform: 'scale(0)',
          opacity: 0,
        })),
        state('*', style({
          trasform: 'scale(1)',
          opacity: 1,
        })),
        transition('void=>*', [animate('1000ms ease-out')])
      ]),

      trigger('randomMovement', [
        transition('* <=> *', [
          animate('10s linear', keyframes([
            style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
            style({ transform: 'translate3d(10px, -10px, 0)', offset: 0.25 }),
            style({ transform: 'translate3d(-10px, 10px, 0)', offset: 0.50 }),
            style({ transform: 'translate3d(10px, 10px, 0)', offset: 0.75 }),
            style({ transform: 'translate3d(0px, 0px, 0px)', offset: 1.0 })
          ]))
        ])
      ])

    ]
})
export class AboutMeComponent implements OnInit{

  ngOnInit()
  {
    this.animate();
  }

  movingElementState: string = "start";
  animate()
  {
    const toggleState = () => {
      this.movingElementState = this.movingElementState === 'start' ? 'end' : 'start';
      setTimeout(toggleState, 10000); // Adjust the duration to match your animation time
    };
    toggleState();
  }
}
