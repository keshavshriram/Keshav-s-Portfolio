import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path : 'app-about-me',
    component : AboutMeComponent
  },
  {
    path : 'app-skills',
    component : SkillsComponent
  },
  {
    path : 'app-projects',
    component : ProjectsComponent
  },
  {
    path : 'app-experience',
    component : ExperienceComponent
  },
  {
    path : 'app-contact',
    component : ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
