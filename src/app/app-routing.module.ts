import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent }    from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { HomeComponent }    from './home/home.component';
import { AboutComponent }    from './about/about.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'detail/:id', component: ProjectDetailComponent },


];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}	