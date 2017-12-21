import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

	// projects = PROJECTS;

  // selectedProject: Project;

  projects: Project[];


  constructor(private projectService: ProjectService) { }

  ngOnInit() { 
    this.getProjects();
  }

  // onSelect(project: Project): void {
  		// this.selectedProject = project;
  	// }

  // getProjects(): void {
  //   this.projects = this.projectService.getProjects();
  // }

  getProjects(): void {
    this.projectService.getProjects()
        .subscribe(projects => this.projects = projects);
  }

}

