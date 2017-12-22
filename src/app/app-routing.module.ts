import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent }    from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AboutComponent }    from './about/about.component';

const routes: Routes = [
  // { path: '', redirectTo: '/projects', pathMatch: 'full' },
  // { path: 'projects', component: ProjectsComponent },
  // // { path: 'detail/:title', component: ProjectDetailComponent },
  // { path: 'detail/:id', component: ProjectDetailComponent },
  // { path: 'about', component: AboutComponent },


];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}	