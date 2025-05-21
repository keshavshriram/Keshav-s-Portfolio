import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

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
export class HomeComponent implements OnInit {
  async ngOnInit(): Promise<void> {
    await loadSlim(tsParticles);
    
    await tsParticles.load({
      id: "tsparticles",
      options: {
        fullScreen: {
          enable: false,
          zIndex: -1
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              width: 800,
              height: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.0
          },
          size: {
            value: { min: 1, max: 3 }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "slow",  // This enables the slowdown effect
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            slow: {
              factor: 0.8,  // Speed reduction factor (0.5 = 50% of normal speed)
              radius: 200   // Radius of the area affected by hover
            }
          }
        }
      }
    });
  }
}
