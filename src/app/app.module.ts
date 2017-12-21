import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectService } from './project.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
